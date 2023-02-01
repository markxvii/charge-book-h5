import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import {createStyleImportPlugin} from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin(
      {
        libs: [
          {
            libraryName: 'zarm',
            esModules: true,
            resolveStyle: (name) => {
              return `zarm/es/${name}/style/css`
            }
          }
        ]
      }
    )
  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  base: '/', // 开发或生产环境服务的公共基础路径
  optimizeDeps: {
    force: true // 强制进行依赖预构建
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 路径别名q
      'utils': path.resolve(__dirname, 'src/utils') // src 路径'utils': path.resolve(__dirname, 'src/utils') // src 路径
    }
  },
  server: {
    host: true, // 监听所有地址
    proxy: {
      proxy: {
        '/api': {
          // 当遇到 /api 路径时，将其转换成 target 的值
          target: 'http://api.chennick.wang/api/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
        }
      },
      // // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // // Proxying websockets or socket.io
      // '/socket.io': {
      //   target: 'ws://localhost:3000',
      //   ws: true
      // }
    }
  },
  build: {
    outDir: 'build', // 打包文件的输出目录
    assetsDir: 'static', // 静态资源的存放目录
    assetsInlineLimit: 4096 // 图片转 base64 编码的阈值
  }
})
