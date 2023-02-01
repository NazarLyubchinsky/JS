let userNumberCards = prompt('Введіть номер картки');
let nameUser = prompt('Введіть ваше імя');
let userCountry = prompt('Введіть місце проживання');
let userAge = prompt('Введіть вік');
let currentYear = Number(new Date().getFullYear());
let userBirthYear = Number((currentYear - userAge));

if (userAge >= 18) {
	if (userCountry == 'USA' || userCountry == 'EN' && userAge >= 18) {
		alert(`Good afternoon ${nameUser}, your year of birth is: ${userBirthYear}. funds will be sent to your card ${userNumberCards}. By place of residence: ${userCountry}`);
	} else {
		if (userCountry == 'UA' && userAge >= 18) {
			alert(`Доброго дня ${nameUser}, Ваш рік народження: ${userBirthYear}. Вам буде надіслано кошти на картку: ${userNumberCards}. по місцю проживання: ${userCountry}`);
		} else {
			if (userCountry != 'USA' || userCountry != 'EN' || userCountry != 'UA') {
				alert('В базі даних немає такої мови, виберіть іншу');
			}
		}
	}
} else {
	alert('Вам немає +18')
}