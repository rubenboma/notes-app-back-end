npm install @hapi/hapi
npm install nodemon --save-dev(disimpan di devDepedencies)
npm install eslint --save-dev
npx eslint --init / npm init @eslint/config(sebelum menggunakan, eslint perlu di konfigurasi)

pasang :
    "start":"nodemon ___.js"(di objek scripts)



note : 
    - nodemon berguna untuk otomatis menerapkan perubahan
    - eslint mengevaluasi code yang dituliskan berdasarkan aturang yang anda terapkan

eslin konfiguration :
-How would you like to use ESLint? -> To check, find problems, and enforce code style.
-What type of modules does your project use? -> CommonJS (require/exports).
-Which framework did you use? -> None of these. 
-Does your project use TypeScript? -> N.
-Where does your code run? -> Node (pilih menggunakan spasi).
-How would you like to define a style for your project? -> Use a popular style guide.
-Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh pilih AirBnB).
-What format do you want your config file to be in? -> JSON.
-Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.