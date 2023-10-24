function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        let currentProfit = prices[i] - minPrice;
        if (currentProfit > maxProfit) {
          maxProfit = currentProfit;
        }
      }
    }
  
    return maxProfit;
  }
  
  function calculateMaxProfit() {
    let input = document.getElementById("input").value;
    let prices = input.split(",").map(Number);
    let maxProfitValue = maxProfit(prices);
    document.getElementById("output").innerHTML = maxProfitValue;
  }
