// var firstName = "Khushal"
// var lastName = "Shambu"
// var country = "India"
// var city = "hyd"
// var age = 21
// var isMarried = false
// var year = 2000
// console.log("hey", typeof firstName)
// console.log("hey", typeof lastName)
// console.log("hey", typeof country)
// console.log("hey", typeof city)
// console.log("hey", typeof age)
// console.log("hey", typeof isMarried)
// console.log("10" === 10)
// console.log (parseInt("9.8") === 10)
// let var1 = "python"
// let var2 = "jargon"
// console.log(var1.length === var2.length)
// let b = parseInt(prompt("enter b"))
// let h = parseInt(prompt("enter h"))
// console.log(0.5*b*h)
// let a = parseInt(prompt("enter b"))
// let c = parseInt(prompt("enter h"))
// console.log(a*b)
// console.log(2*(a+b))
// let arr1 = [2,2]
// let arr2 = [6,10]
// console.log("the slop is", (arr2[1]-arr1[1])/(arr2[0]-arr1[0]))
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// firstName.length > lastName.length
//   ? console.log(firstName + " " + "is longer than " + " "+ lastName)
//   : console.log(firstName + "is shorter than" + lastName)
// let userage = prompt("enter your age")
// userage >= 18
//  ? console.log("you are old enough to drive")
//  : console.log("you are left with " + (18 - userage) + " years to drive" )
//
//Conditionals -- Day 5
 // let myage= 22
 // let userage = prompt("enter your age")
 // if(myage > userage) {
 //   console.log("you are " + (myage-userage) + " shorter than me" )
 // }
 //  else if(myage < userage){
 //    console.log("you are " + (userage - myage) + " older than me")
 //  }
 //  else {
 //    console.log("we are of same age")
 //  }
 // let num = prompt("give a number")
 // num = parseInt(num)
 // if (num%2 == 0) {
 //   console.log("it is even")
 // }
 // else if(num%2 != 0) {
 //   console.log("it is odd")
 // }
 // let score = prompt("enter your percentage")
 // switch(true) {
 //  case score>=80 || score<=100:
 //          console.log("A")
 //        break
 //  case score >=70 || score<90: console.log("B")
 //        break
 //  case score >= 60 || score < 70:
 //  console.log("C")
 //  break
 //  case score >= 50 || score<60:
 //  console.log("D")
 //  break;
 //  case score <50 : console.log("F")
 //  break
 //  default : console.log("hey man")
 // }
// let season = prompt("enter the month")
// season = season.toLowerCase()
// switch(true){
//   case season=='september' ||  season || 'october' || season == 'november' :
//   console.log('the season is autumn')
//   break
//   case season =='december' || season == 'january' || season == 'february' :
//   console.log('the season is winter')
//   break
//   case season =='march' || season == 'april' || season == 'may' :
//   console.log('the season is spring')
//   break
//   case season =='june' || season == 'july' || season == 'august' :
//   console.log('the season is summer')
//   break
//   default : console.log("enter correct value")
// }
// function getdays(year,month) {
//   if(month%2 == 0 || month == 7 || month == 9 || month==11) {console.log(31)}
//   else if(month==1)
//   { if(year%4==0 && year%100==0 &&year%400==0 ) { console.log(29)
//   } else {console.log(28)}
//   }
//   else {console.log(30)}
//   }
// console.log(getdays(1601,1))
// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')
// console.log(companies)
// function palindrome(string) {
//   stringarr = string.split('')
//   stringrev = stringarr.reverse()
//   stringrevstr = stringrev.join('')
//   if(string === stringrevstr)
//   { console.log("yeah")}
//   else { console.log("nope")}
// }
// palindrome("yahoo")
// const arr = [7,8,9,0,12,13,10,20,30,40]
// arr.splice(4,3,19,18)
// console.log(arr)
//Day 5
let arr3 = []
console.log(arr)
let arr1 = Array(6)
console.log(arr1.length())
let arr = [1,2,3,4,5]
console.log(arr[0])
let lastindex = arr.length - 1
console.log(arr[lastindex])
let middleindex = (arr.length)/2
middleindex = Math.floor(middleindex)
console.log(arr[middleindex])
let diff = [1,2,3,4,5,"hi","how are you",{class: "namaste"}, ["hi","inkendi",5]]
let upp = ["hi","ela unnav","inka mama"]
console.log(diff.length)
console.log(diff.join(' '))
upp = upp.join(',')
upp = upp.toUpperCase()
console.log(upp)
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"]
let index = companies.indexOf('banana')
if(index === -1) { console.log("does not ")} else {console.log("it does")}
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.split(' ')
console.log(text)
console.log(text.length)
punctuate = text.indexOf(".")
text.pop(punctuate)
console.log(text.length)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(Math.min(...ages))
console.log(Math.max(...ages))

if((ages.length)%2 == 0) {
   let middleindex = Math.floor(ages.length/2)
   console.log(ages[middleindex])
}
else {
  let middleindex = Math.floor((ages.length)+(ages.length + 1 )/2)
  console.log(ages[middleindex])
}
let sum = 0
for(i=0;i<ages.length;i++){
  sum += ages[i]
}
average = sum/ages.length
console.log(average)
range = Math.max(...ages) - Math.min(...ages)
console.log(range)
let val1 = Math.min(...ages) - average
let val2 = Math.max(...ages) - average
console.log(Math.abs(val1,val2))


const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
let firstten = countries.slice(0,10)
console.log(firstten)
console.log(countries.length)
middle = Math.round(countries.length/2)
console.log(countries[middle])
arr2 = countries.slice(0,middle)
console.log(arr2.length)
