//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//2. 환율정보
//3. 드랍다운 리스트엥서 아이텐 선택하면 아이템이 바뀜
//4. 금액을 입력하면 환전이 된다.
//5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//6. 숫자를 한국어로 읽는법 -> 영어로
//7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용된다.


let currencyRatio = { //변수
    USD:{
        KRW:1336.95,
        USD: 1,
        VND:24380.00,
        unit:"dollar"
    },
    KRW:{
        KRW:1,
        USD:0.00075,
        VND:18.24,
        unit:"won"
    },
    VND:{
        VND:1,
        KRW:0.055,
        USD:0.000041,
        unit:"đồng"
    }

}

//1. console.log(currencyRatio.VND.unit);

//console.log(currencyRatio["VND"]["unit"]);

let fromCurrency = 'USD';

document
.querySelectorAll("#from-currency-list a").forEach((menu) => 
    menu.addEventListener("click",function (){
    //1.버튼으ㅡㄹ 가벼온다
    document.getElementById("from-button").textContent = this.textContent;

    //2. 버튼의 값을 바꾼다.
    //.textContent = this.textContent;

    //3. 선택된 currency 값을 변수에 저장해둔다.
        fromCurrency = this.textContent;
        console.log("fromcurrency는",fromCurrency);

})
);


document
.querySelectorAll("#to-currency-list a").forEach((menu) => 
    menu.addEventListener("click",function (){
    //1.버튼으ㅡㄹ 가벼온다
    document.getElementById("to-button").textContent = this.textContent;

    //2. 버튼의 값을 바꾼다.
    //.textContent = this.textContent;

    //3. 선택된 currency 값을 변수에 저장해둔다.
        toCurrency = this.textContent;
        console.log("tocurrency는",fromCurrency);

})
);


//1. 키를 입력하는 순간
//2. 환전이 되서
//3. 환전된 값이 보인다.


