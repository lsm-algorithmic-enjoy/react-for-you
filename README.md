# Coin Price Converter

프로젝트 설명: useState, useEffect를 활용하였고 fetch를 이용해 달러 기준 코인 가격 데이터를 받아서 input에 money를 입력하면 option을 통해 달러가격 money에 알맞은 종류별 가상화폐 가격으로 환전해주는 기능을 구현하는데 성공했습니다.

input에서 money를 통해 달러가격을 입력받고 map을 이용하여 코인가격에 대해 가상화폐 환전식= (money / coin.quotes.USD.price)를 적용하는 것이 키포인트이고 reset 함수 적용을 통해 입력(money)을 0으로 초기화 하였습니다.

( //const [coins, setCoins] = useState([]); 와 같이 기본값([])을 주는 이유: 만약 기본값을 주지 않으면 시작할때 coins가 undefined가 되버리고 이에 따라 coins.length는 존재할 수 없다. 이때 에러가 발생.)
