console.log("Hello world");

document.addEventListener("DOMContentLoaded", () => {
  const superHeaders = document.getElementsByClassName("container")[0]; // [][0] = undefined => undefined.style neeksistē

  setTimeout(() => {
    superHeaders.style.gridTemplateRows = "2em 300px 6.25em auto 3.75em";
  }, 3000);

  // DOM: Document Object Model

  superHeaders.addEventListener("click", () => {
    superHeaders.style.gridTemplateRows = "0 300px 6.25em auto 3.75em";
  });
});

/*
1. tiklīdz tiek ielādēts skripts, tas uzreiz sāk izpildīties
2. tiek palaists taimeris ar funkciju, kas parādīs noslēpto elementu.
3. bet negaidot tās 3 sekundses, šīm elementam tiks piešķirts notikuma "click" klausītājs, kas šo elementu atkal noslēps
4. pēc trīs sekundēm nostrādā taimera modinātājs un palaidīs callback funkciju, kas parādīs šo slēpto elementu
5. pa cik šīs skripts meklē elementu iekš html koda, tas ievietots pašās beigās, lai šīs elements jau eksistētu.
*/
