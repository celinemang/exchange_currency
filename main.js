//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//2. 환율정보
//3. 드랍다운 리스트엥서 아이텐 선택하면 아이템이 바뀜
//4. 금액을 입력하면 환전이 된다.
//5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//6. 숫자를 한국어로 읽는법 -> 영어로
//7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용된다.

const currencyRatio = {
  VND: {
    USD: 0.000043,
    KRW: 0.051,
    VND: 1,
    unit: "Dong",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
  },
  USD: {
    USD: 1,
    KRW: 1182.35,
    VND: 23235.5,
    unit: "Dollar",
    img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
  },
  KRW: {
    USD: 0.00085,
    KRW: 1,
    VND: 19.47,
    unit: "Won",
    img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
  },
};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let toCurrency = "USD";
let fromCurrency = "USD";

document.querySelectorAll("#from-currency-list li").forEach(function (item) {
  item.addEventListener("click", function () {
    fromCurrency = this.id;
    fromButton.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
    convert("from");
  });
});

document.querySelectorAll("#to-currency-list li").forEach(function (item) {
  item.addEventListener("click", function () {
    toCurrency = this.id;
    toButton.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
    convert("from");
  });
});

function convert(type) {
  console.log("here");
  let amount = 0;
  if (type == "from") {
    //입력갑 받기
    amount = document.getElementById("fromAmount").value;
    // 환전하기
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // 환전한값 보여주기
    document.getElementById("toAmount").value = convertedAmount;
    //환전한값 한국어로
    renderKoreanNumber(amount, convertedAmount);
  } else {
    amount = document.getElementById("toAmount").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("fromAmount").value = convertedAmount;
    renderKoreanNumber(convertedAmount, amount);
  }
}
function renderKoreanNumber(from, to) {
  document.getElementById("fromNumToKorea").textContent =
    readNum(from) + currencyRatio[fromCurrency].unit;
  document.getElementById("toNumToKorea").textContent =
    readNum(to) + currencyRatio[toCurrency].unit;
}
function readNum(num) {
  let resultString = "";
  let resultArray = [];
  for (let i = 0; i < unitWords.length; i++) {
    let unitResult =
      (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }
  return resultString;
}


//1. 키를 입력하는 순간
//2. 환전이 되서
//3. 환전된 값이 보인다.


