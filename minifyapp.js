function time() {
    let e, t = new Date().toLocaleTimeString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    document.querySelector("#set_time").innerText = t
}
time(), setInterval(() => {
    time()
}, 5e3);
let meterCurrent = 0,
    meterMax = 0;

function meterAndTodo() {
    [
        ["Jogging", "5:00 AM"],
        ["Yoga", "6:00 AM"],
        ["Breakfast", "9:00 AM"],
        ["Walk 10 min ", "9:30 AM"],
        ["Lunch", "12:30 PM"],
        ["Walk 15 min ", "1:00 PM"],
        ["Evening Walk", "6:00 PM"],
        ["Snack", "6:30 PM"],
        ["Dinner", "8:00 PM"],
        ["Walk 20 min", "8:30 PM"],
    ].forEach(e => {
        let t = '<li class="mt-4 to-do" id="1"><div class="flex gap-2"><div class="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3"><span id="check1" class="w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center" onclick="checked(this)"><i class="text-white fa fa-check"></i></span><div id="strike1" class="text-sm ml-4 text-[#5b7a9d] font-semibold">' + e[0] + '</div></div><span class="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center">' + e[1] + "</span></div></li>";
        document.querySelector("#to-do-item").innerHTML = document.querySelector("#to-do-item").innerHTML + t
    }), meterMax = 10 * document.querySelectorAll(".to-do").length
}

function checked(e) {
    var t = document.getElementById("meter");
    "checked" != e.parentElement.id ? (e.parentElement.id = "checked", e.classList.add("bg-green-300"), e.nextElementSibling.classList.add("strike"), meterCurrent >= 0 && (meterCurrent += 10)) : (e.parentElement.id = "", e.classList.remove("bg-green-300"), e.nextElementSibling.classList.remove("strike"), meterCurrent >= 0 && (meterCurrent -= 10)), meterValue = "{ circumference: 50 * 2 * Math.PI, percent: " + parseInt(100 * meterCurrent / meterMax) + "}", t.setAttribute("x-data", meterValue)
}

function callThisPage(e) {
    document.querySelector(".navigation").classList.remove("navigation"), e.classList.add("navigation"), console.log(e.id), document.querySelector(".show").classList.remove("show"), document.querySelector(e.id).classList.add("show")
}

function doctor() {
    [
        ["Dr. BABHULKAR JOBAN", "/dr/dr1.jpg", "MBBS D.M.R.D, D.N.B. (Radio-Diagnosis)", "Speciality: Shoulder and Injuries", "Gender: Female"],
        ["Dr. SINHA AVIJAN", "/dr/dr2.jpg", "B.P.Th. M. P. Th.", "Speciality: Ophthalmologist (Eye specialist)", "Gender: Male"],
        ["Dr. ATHAVALE SMITA R.", "/dr/dr5.jpg", "BDS MDS(PROSTHODONTIST)", "Speciality: Dentistry", "Gender: Female"],
        ["Dr. SURYAVANSHI MIHIR", "/dr/dr3.jpg", "MBBS MS, DNB, FCPS, DORL", "Speciality: Ear,Nose and Throat (ENT)", "Gender: Male"],
        ["Dr. MEENU AGARWAL", "/dr/dr6.jpeg", "DNB, DGO, MBBS", "Speciality: Gynaecologist and Obstetrician", "Gender: Female"],
        ["Dr. BHOWMICK NILANJAN", "/dr/dr4.jpg", "MBBS MS(ENT)", "Speciality: ENT, Vertigo and Balance Clinic", "Gender: Male"]
    ].forEach(e => {
        let t = '<li class="border-0 rounded-lg bg-slate-800 flex items-center mb-2 p-2 relative shadow-xl text-inherit"><div class=" duration-200 ease-soft-in-out inline-flex mr-2 rounded-xl text-size-base text-white transition-all w-1/3"><img alt=kal style="height:100%; max-width:200px;object-fit: cover;" class="rounded-xl mr-2 shadow-soft-2xl w-full" src=' + e[1] + '></div><div class="flex flex-col items-start pl-2 justify-center"><h2 class="mb-0 leading-normal py-1 text-lg text-white">' + e[0] + '</h2><p class="text-gray-300 text-sm">' + e[2] + '<p class="text-gray-300 text-sm">' + e[3] + '<p class="text-gray-300 text-sm">' + e[4] + '</p><a class="border-0 rounded-2xl align-middle bg-green-400 inline-block mt-2 px-10 mb-0 py-1 text-center text-white uppercase" href="tel:+919876543210">Call</a></div>',
            r = document.querySelector("#doctorList").innerHTML;
        document.querySelector("#doctorList").innerHTML = r + t
    })
}

function calculateBMI() {
    let e = parseInt(document.querySelector("#height").value),
        t = parseInt(document.querySelector("#weight").value),
        r = document.querySelector("#result");
    if ("" === e || isNaN(e)) r.value = "Provide a valid Height!";
    else if ("" === t || isNaN(t)) r.value = "Provide a valid Weight!";
    else {
        let i = (t / (e * e / 1e4)).toFixed(2);
        i < 18.6 ? r.value = `Under Weight :${i}` : i >= 18.6 && i < 24.9 ? r.value = `Normal : ${i}` : r.value = `Over Weight :${i}`
    }
}
meterAndTodo(), doctor(), calculateBMI();