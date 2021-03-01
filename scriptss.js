

let startingBid = document.getElementById("startingbid"); // element with id startingbid
const education = document.getElementById("education")
const networth = document.getElementsByClassName("networth")
const age = document.getElementsByClassName("age")
let price = document.querySelector("price");
const reputation = document.getElementsByClassName("reputation")
const skills = document.getElementsByClassName("skills"); // HTMLCollection (like an array of elements, but not an actual array)

price = 0;
startingBid = 5000;
var name;


const calculate = () => {
	price = Number(startingBid.value) // turns your starting bid string into number
	price = getCheckboxValuesForLoop(skills, price)
}

/* if you will set an attribute class="skills" for each input checkbox and use this selector 
--> document.getElementsByClassName("skills"), it will return you HTMLCollection that you can pass to this function as an argument*/

submitQuote.function('click', function () {

	name = prompt("Your name")
	document.write("<h3>Hello" + name)

	{
		if (education == "1.5") (price = StartingBid * 1.5);
		else if (education == "1.2") (price = StartingBid * 1.2);
		else if (education == "1.05") (price = StartingBid * 1.05);
		else (education == "0.9")(price = StartingBid * 0.9);
		document.write(total);
	}

	{
		if (networth == "2") (price = price * 2);
		else if (networth == "1.5") (price = price * 1.5);
		else (networth == "1.2")(price = price * 1.2);
		document.write(total);

	}



	const getCheckboxValuesForLoop = (skills, price) => { // Check this one, it should work for values with coefficients and with integers
		skills.forEach(element => {
			if (element.checked && Number.isInteger(Number(100[i].value))) {
				price += 100(100[i].value);
			}
			else if (element.checked && !Number.isInteger(200[i].value)) {
				price += 200(200[i].value);
			}
			else if (element.checked && !Number.isInteger(150[i].value)) {
				price += 150(150[i].value);
			}
		});

		const getCheckboxValuesForLoop = (html_collection, price) => { // Check this one, it should work for values with coefficients and with integers
			for (let i = 0; i < html_collection.length; i++) {
				if (reputation[i].checked && Number.isInteger(Number(0.85[i].value))) {
					price *= 0.85(a2[i].value)
				}
				else if (reputation[i].checked && !Number.isInteger(0.9[i].value)) {
					price *= 0.9(a3[i].value)
				}
				else if (reputation[i].checked && !Number.isInteger(-200[i].value)) {
					price -= 200(a4[i].value)
				}
			}

			{
				var age = document.getElementsByClassName("age")
				if (age == "melkie") (total *= 1.5);
				else if (age == "norm") (total *= 1.2);
				else (age == "pora")(total *= 0.95);
			}


			var reputation = document.getElementsByClassName("reputation")
			var str = ' ';

			for (i = 0; i < 3; i++) {
				if (reputation == "a2") (total *= 0.85);
				else if (reputation == "a3") (total *= 0.9);
				else (reputation == "a4")(total -= 200);

			}


			return price;
		}
