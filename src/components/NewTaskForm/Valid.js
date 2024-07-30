export default function Valid(value) {
   if (value.trim() === '') {
      alert('Необходимо ну хоть что-нибудь ввести');
      return false;
   }
   return true;
}
