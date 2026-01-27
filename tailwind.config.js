/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // 이 부분이 Vue 파일을 감시하도록 설정되어야 합니다.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
