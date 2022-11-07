function time() {
    let date = new Date();
    let options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };
    let time = date.toLocaleTimeString("en-us", options)
    document.querySelector("#set_time").innerText = time
}
time()

setInterval(() => {
    time()
}, 5000);




//Meter + todo
let meterCurrent = 0;
let meterMax = 0;

function meterAndTodo() {
    let whatTodo = [
        ['Jogging', '5:00 AM'],
        ['Yoga', '6:00 AM'],
        ['Breakfast', '9:00 AM'],
        ['Walk 10 min ', '9:30 AM'],
        ['Lunch', '12:30 PM'],
        ['Walk 15 min ', '1:00 PM'],
        ['Evening Walk', '6:00 PM'],
        ['Snack', '6:30 PM'],
        ['Dinner', '8:00 PM'],
        ['Walk 20 min', '8:30 PM'],
    ]
    whatTodo.forEach((x) => {
        let y = '<li class="mt-4 to-do" id="1"><div class="flex gap-2"><div class="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3"><span id="check1" class="w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center" onclick="checked(this)"><i class="text-white fa fa-check"></i></span><div id="strike1" class="text-sm ml-4 text-[#5b7a9d] font-semibold">' + x[0] + '</div></div><span class="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center">' + x[1] + '</span></div></li>';
        document.querySelector('#to-do-item').innerHTML = document.querySelector('#to-do-item').innerHTML + y;
    })
    meterMax = document.querySelectorAll('.to-do').length * 10;
}

function checked(x) {
    var element = document.getElementById("meter");
    if (x.parentElement.id != 'checked') {
        x.parentElement.id = "checked"
        x.classList.add("bg-green-300");
        x.nextElementSibling.classList.add("strike")
        if (meterCurrent >= 0) meterCurrent = meterCurrent + 10;
    } else {
        x.parentElement.id = ""
        x.classList.remove("bg-green-300");
        x.nextElementSibling.classList.remove("strike")
        if (meterCurrent >= 0) meterCurrent = meterCurrent - 10;
    }
    meterValue = "{ circumference: 50 * 2 * Math.PI, percent: " + parseInt(meterCurrent * 100 / meterMax) + "}"
    element.setAttribute("x-data", meterValue);


}
meterAndTodo()




//navigation
function callThisPage(x) {
    document.querySelector('.navigation').classList.remove('navigation')
    x.classList.add('navigation')
    console.log(x.id)
    document.querySelector('.show').classList.remove('show')
    document.querySelector(x.id).classList.add('show')

}





//Doctor

function doctor() {
    let listOfDoctor = [
        ["Dr. BABHULKAR JOBAN", "/dr/dr1.jpg", "MBBS D.M.R.D, D.N.B. (Radio-Diagnosis)", "Speciality: Shoulder and Injuries", "Gender: Female"],
        ["Dr. SINHA AVIJAN", "/dr/dr2.jpg", "B.P.Th. M. P. Th.", "Speciality: Ophthalmologist (Eye specialist)", "Gender: Male"],
        ["Dr. ATHAVALE SMITA R.","/dr/dr5.jpg","BDS MDS(PROSTHODONTIST)","Speciality: Dentistry","Gender: Female"],
        ["Dr. SURYAVANSHI MIHIR","/dr/dr3.jpg","MBBS MS, DNB, FCPS, DORL","Speciality: Ear,Nose and Throat (ENT)","Gender: Male"],
        ["Dr. MEENU AGARWAL","/dr/dr6.jpeg","DNB, DGO, MBBS","Speciality: Gynaecologist and Obstetrician","Gender: Female"],
        ["Dr. BHOWMICK NILANJAN","/dr/dr4.jpg","MBBS MS(ENT)","Speciality: ENT, Vertigo and Balance Clinic","Gender: Male"]


    ]

    listOfDoctor.forEach((x) => {
        let y = '<li class="border-0 rounded-lg bg-slate-800 flex items-center mb-2 p-2 relative shadow-xl text-inherit"><div class=" duration-200 ease-soft-in-out inline-flex mr-2 rounded-xl text-size-base text-white transition-all w-1/3"><img alt=kal style="height:100%; max-width:200px;object-fit: cover;" class="rounded-xl mr-2 shadow-soft-2xl w-full" src=' + x[1] + '></div><div class="flex flex-col items-start pl-2 justify-center"><h2 class="mb-0 leading-normal py-1 text-lg text-white">' + x[0] + '</h2><p class="text-gray-300 text-sm">' + x[2] + '<p class="text-gray-300 text-sm">' + x[3] + '<p class="text-gray-300 text-sm">' + x[4] + '</p><a class="border-0 rounded-2xl align-middle bg-green-400 inline-block mt-2 px-10 mb-0 py-1 text-center text-white uppercase" href="tel:+919876543210">Call</a></div>'
        let z = document.querySelector("#doctorList").innerHTML
        document.querySelector("#doctorList").innerHTML = z + y
    })
}
doctor()




//BMI

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.value = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.value = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.value =
			`Under Weight :${bmi}`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.value =
				`Normal : ${bmi}`;

		else result.value =
			`Over Weight :${bmi}`;
	}
}
calculateBMI()