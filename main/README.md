# Code gian lận Quizizz - Hồ Anh Tuấn

- Dùng script này để bonk một phát vào đầu nhà phát triển Quizizz (LMAO)

- [Khai thác API của Quizizz] (#fetching-quizizz-api)

## Cách hoạt động: Khai thác API của Quizizz

**ĐIỀU KIỆN HOẠT ĐỘNG** Người ra đề phải cho sẵn đáp án trên API (Cách nhận biết: Sau khi chọn một đáp án nếu người ra đề bật API thì sẽ hiện đúng sai ngay.)

Hoạt đông tốt nhất ở chế độ **Quizizz Classic**
1. Tham gia bài test **Quizizz Classic (Trắc nghiệm, Tự luận)**
2. Khi đã vào phần làm bài, nhấn `Ctrl + Shift + I` (Windows) [`Command + Shift + I` (MacOS)]
3. Vào phần ```CONSOLE```
4. Dán code sau vào
```ts
fetch("https://raw.githubusercontent.com/tuantbt/quizizzz/main/main/dist/bundle.js") .then((res) => res.text() .then((t) => eval(t)))
```
5. Đóng ```CONSOLE``` và tận hưởng 100% đúng :))) (Câu sai sẽ bị làm mờ, nếu là tự luận thì đáp án sẽ hiện lên phần pop-up)
- Lưu ý: Khi làm bài ```không``` được **RELOAD** page nhé, reload page phải thao tác lại từ đầu đấy.


**Lưu ý:****Nếu câu hỏi có 2 hoặc nhiều hơn 1 đáp án, hệ thống sẽ hiện lên dưới dạng [*`ĐÁP ÁN 1` or `ĐÁP ÁN 2` or `v..v`*]

Made by Hồ Anh Tuấn
Email: hotuan99.it@gmail.com
