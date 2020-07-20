const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days){
  day = day.charAt(0).toUppercase() + day.substr(1).toLowerCase();
  console.log(day);
}
