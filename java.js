coins = document.querySelector(".coins")
mainCoin = document.querySelector(".coin")
Shop = document.querySelector(".Shop")
main = document.querySelector(".main")
clickbtn = document.querySelector(".clickbtn")
clickUpgrCost = document.querySelector(".clickUpgrCost")
perClickDisplay = document.querySelector(".perclick")
rebirthDisplay = document.querySelector(".rebirth")
rebirthCostDisplay = document.querySelector(".rebirthCost")
rebirthbtn = document.querySelector(".rebirthbtn")
cokeCoin = document.querySelector(".cokeCoin")
cokebtn = document.querySelector(".cokebtn")
bitCoin = document.querySelector(".bitCoin")
bitCoinbtn = document.querySelector(".bitCoinbtn")
Quests = document.querySelector(".Quests")
minePlusDisplay = document.querySelector(".minePlus")
mineDisplay = document.querySelector(".persecond")
mineUpgrCost = document.querySelector(".mineUpgrCost")
mineUpbtn = document.querySelector(".minebtn    ")
let perClickPlusDisplay = document.querySelector(".perClickPlus")


let minePerSecond = parseInt(localStorage.getItem("minePerSecond")) || 1; // Количество очков, добавляемых каждую секунду
let mineUpCost = parseInt(localStorage.getItem("mineUpCost")) || 100;
let rebirthCost = parseInt(localStorage.getItem('rebirthCost')) || 1000000;
let rebirthCounter = parseInt(localStorage.getItem('rebirthCounter  ')) || 0;
let perClick = parseInt(localStorage.getItem('perClick')) || 1;
let score = parseInt(localStorage.getItem('score')) || 0;
let a = parseInt(localStorage.getItem('a')) || 6
let b = parseInt(localStorage.getItem('b')) || 6

let clickUpCost = localStorage.getItem('clickUpCost');
if (clickUpCost === null) {
    clickUpCost = 10;  // Если счёт не сохранён, начинаем с 10
} else {
    clickUpCost = parseInt(clickUpCost);  // Преобразуем строку в число
}



// 2 2 5 20 20 50 200 200 500 2000 2000 5000
let perClickPlus = parseInt(localStorage.getItem('perClickPlus')) || 4
let komka2 = parseInt(localStorage.getItem('komka2')) || 1
let perem = parseInt(localStorage.getItem('perem')) || 0
let perem2 = parseInt(localStorage.getItem('perem2')) || 0
let perem3 = parseInt(localStorage.getItem('perem3')) || 4
perem3*=komka2
rebirthDisplay.innerHTML = rebirthCounter
rebirthCostDisplay.innerHTML = `${(rebirthCost - rebirthCost % 10000) / 1000000}M`
perClickDisplay.innerHTML = perClick
coins.innerHTML = score
clickUpgrCost.innerHTML = clickUpCost
perClickPlusDisplay.innerHTML = `+${perem3}`
mineDisplay.innerHTML = minePerSecond

let bitChecker = parseInt(localStorage.getItem('bitChecker')) || 0
let cokeChecker = parseInt(localStorage.getItem('cokeChecker')) || 0

if (bitChecker == 1) {
    mainCoin.style.backgroundImage = "url('icons/bitCoinIcon.png')";
    bitCoin.style.display = "none"
}

if (cokeChecker == 1) {
    mainCoin.style.backgroundImage = "url('icons/cokeIcon.webp')";
    cokeCoin.style.display = "none"
}
//score
if (score >= 1000) {
    coins.innerHTML = `${(score - score % 10) / 1000}K`
}
if (score >= 1000000) {
    coins.innerHTML = `${(score - score % 10000) / 1000000}M`
}
if (score >= 1000000000) {
    coins.innerHTML = `${(score - score % 10000000) / 1000000000}B`
}
//perClick
if (perClick >= 1000) {
    perClickDisplay.innerHTML = `${(perClick - perClick % 10) / 1000}K`
}
if (perClick >= 1000000) {
    perClickDisplay.innerHTML = `${(perClick - perClick % 10000) / 1000000}M`
}
if (perClick >= 1000000000) {
    perClickDisplay.innerHTML = `${(perClick - perClick % 1000000) / 1000000000}B`
}
//perClickPlus
if (perem3 >= 1000) {
    perClickPlusDisplay.innerHTML = `${(perem3 - perem3 % 10) / 1000}K` 
}else {
    console.log(perem3)
}
if (perem3 >= 1000000) {
    perClickPlusDisplay.innerHTML = `${(perem3 - perem3 % 10000) / 1000000}M`
}
if (perem3 >= 1000000000) {
    perClickPlusDisplay.innerHTML = `${(perem3 - perem3 % 10000000) / 1000000000}B`
}
//clickUpCost
if (clickUpCost >= 1000) {
    clickUpgrCost.innerHTML = `${(clickUpCost - clickUpCost % 10) / 1000}K`
}
if (clickUpCost >= 1000000) {
    clickUpgrCost.innerHTML = `${(clickUpCost - clickUpCost % 10000) / 1000000}M`
}
if (clickUpCost >= 1000000000) {
    clickUpgrCost.innerHTML = `${(clickUpCost - clickUpCost % 1000000) / 1000000000}B`
}
//minePerSecond
if (minePerSecond >= 1000) {
    mineDisplay.innerHTML = `${(minePerSecond - minePerSecond % 10) / 1000}K`
}
if (minePerSecond >= 1000000) {
    mineDisplay.innerHTML = `${(minePerSecond - minePerSecond % 10000) / 1000000}M`
}
if (minePerSecond >= 1000000000) {
    minePerSecond.innerHTML = `${(minePerSecond - minePerSecond % 1000000) / 1000000000}B`
}
//mineUpCost
if (mineUpCost >= 1000) {
    mineUpgrCost.innerHTML = `${(mineUpCost - mineUpCost % 10) / 1000}K`
}
if (mineUpCost >= 1000000) {
    mineUpgrCost.innerHTML = `${(mineUpCost - mineUpCost % 10000) / 1000000}M`
}
if (minePerSecond >= 1000000000) {
    mineUpgrCost.innerHTML = `${(mineUpCost - mineUpCost % 1000000) / 1000000000}B`
}



let plus = () => {
    score += perClick
    coins.innerHTML = score
    if (score >= 1000) {
        coins.innerHTML = `${(score - score % 10) / 1000}K`
    }
    if (score >= 1000000) {
        coins.innerHTML = `${(score - score % 10000) / 1000000}M`
    }
    if (score >= 1000000000) {
        coins.innerHTML = `${(score - score % 10000000) / 1000000000}B`
    }
    localStorage.setItem("score", score)
}

let shop = () => {
    main.style.display = "none"
    Shop.style.display = "flex"
    if (score >= clickUpCost) {
        clickbtn.style.background = "green"
    } else {
        clickbtn.style.background = "rgb(80, 99, 80)"
    }
    if (score >= rebirthCost) {
        rebirthbtn.style.background = "green"
    } else {
        rebirthbtn.style.background = "rgb(80, 99, 80)"
    }
    if (score >= 1000) {
        cokebtn.style.background = "green"
    } else {
        cokebtn.style.background = "rgb(80, 99, 80)"
    }
    if (score >= 1000000) {
        bitCoinbtn.style.background = "green"
    } else {
        bitCoinbtn.style.background = "rgb(80, 99, 80)"
    }
    if (score >= mineUpCost) {
        mineUpbtn.style.background = "green"
    }else {
        mineUpbtn.style.background = "rgb(80, 99, 80)"
    }
}

let back = () => {
    main.style.display = "flex"
    Shop.style.display = "none"
    Quests.style.display = "none"
    coins.innerHTML = score
    if (score >= 1000) {
        coins.innerHTML = `${(score - score % 10) / 1000}K`
    }
    if (score >= 1000000) {
        coins.innerHTML = `${(score - score % 10000) / 1000000}M`
    }
    if (score >= 1000000000) {
        coins.innerHTML = `${(score - score % 10000000) / 1000000000}B`
    }

    if (perClick >= 1000) {
        perClickDisplay.innerHTML = `${(perClick - perClick % 10) / 1000}K`
    }
    if (perClick >= 1000000) {
        perClickDisplay.innerHTML = `${(perClick - perClick % 10000) / 1000000}M`
    }
    if (perClick >= 1000000000) {
        perClickDisplay.innerHTML = `${(perClick - perClick % 1000000) / 1000000000}B`
    }

}

let k = 5
let clickUp = () => {
    if (score >= clickUpCost) {
        
        
        
        
        
        perem += 1
        if (perem == 1) {
            perClickPlus = 4 * komka2
            k = a
        }
        if (perem == 2) {
            perClickPlus = 5 * komka2
            perem = 0
            komka2 *= 10
            k = b
        }
        perem2 += 1
        if (perem2 == 1) {
            perem3 = 5 * komka2
        }
        if (perem2 == 2) {
            perem3 = 4 * komka2
            perem2 = 0
        }
        if (perem3 >= 1000) {
            perem3 = `${(perem3 - perem3 % 10) / 1000}K`
        }
        if (perem3 >= 1000000) {
            perem3 = `${(perem3 - perem3 % 10000) / 1000000}M`
        }
        if (perem3 >= 1000000000) {
            perem3 = `${(perem3 - perem3 % 10000000) / 1000000000}B`
        }
        
        perClick += perClickPlus
        if (perClick >= 1000) {
            perClickDisplay.innerHTML = `${(perClick - perClick % 10) / 1000}K`
        }
        if (perClick >= 1000000) {
            perClickDisplay.innerHTML = `${(perClick - perClick % 10000) / 1000000}M`
        }
        if (perClick >= 1000000000) {
            perClickDisplay.innerHTML = `${(perClick - perClick % 1000000) / 1000000000}B`
        }
        
        score -= clickUpCost
        clickUpCost *= k
        perClickPlusDisplay.innerHTML = `+${perem3}`
        perClickDisplay.innerHTML = perClick
        clickUpgrCost.innerHTML = clickUpCost
        if (clickUpCost >= 1000) {
            clickUpgrCost.innerHTML = `${(clickUpCost - clickUpCost % 10) / 1000}K`
        }
        if (clickUpCost >= 1000000) {
            clickUpgrCost.innerHTML = `${(clickUpCost - clickUpCost % 10000) / 1000000}M`
        }
        if (clickUpCost >= 1000000000) {
            clickUpgrCost.innerHTML = `${(clickUpCost - clickUpCost % 1000000) / 1000000000}B`
        }
        if (score >= clickUpCost) {
            clickbtn.style.background = "green"
        } else {
            clickbtn.style.background = "rgb(80, 99, 80)"
        }
        
        localStorage.setItem('perClickPlus', perClickPlus)
        localStorage.setItem('komka2', komka2)
        localStorage.setItem('perem', perem)
        localStorage.setItem('perem2', perem2)
        localStorage.setItem('perem3', perem3)
        localStorage.setItem('clickUpCost', clickUpCost)
        localStorage.setItem('perClick', perClick)      
        //colors of buttons
        if (score >= clickUpCost) {
            clickbtn.style.background = "green"
        } else {
            clickbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= rebirthCost) {
            rebirthbtn.style.background = "green"
        } else {
            rebirthbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= 1000) {
            cokebtn.style.background = "green"
        } else {
            cokebtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= 1000000) {
            bitCoinbtn.style.background = "green"
        } else {
            bitCoinbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= mineUpCost) {
            mineUpbtn.style.background = "green"
        }else {
            mineUpbtn.style.background = "rgb(80, 99, 80)"
        }
    } else {
        console.log("No coins")
    }
}

let mineUp = () => {
    if (score >= mineUpCost){
        score -= mineUpCost
        mineUpCost *= 5
        mineUpgrCost.innerHTML = mineUpCost
        minePerSecond *= 5
        mineDisplay.innerHTML = minePerSecond
        if (minePerSecond >= 1000) {
            mineDisplay.innerHTML = `${(minePerSecond - minePerSecond % 10) / 1000}K`
        }
        if (minePerSecond >= 1000000) {
            clickUpgrCost.innerHTML = `${(minePerSecond - minePerSecond % 10000) / 1000000}M`
        }
        if (minePerSecond >= 1000000000) {
            minePerSecond.innerHTML = `${(minePerSecond - minePerSecond % 1000000) / 1000000000}B`
        }
        
        if (mineUpCost >= 1000) {
            mineUpgrCost.innerHTML = `${(mineUpCost - mineUpCost % 10) / 1000}K`
        }
        if (mineUpCost >= 1000000) {
            mineUpgrCost.innerHTML = `${(mineUpCost - mineUpCost % 10000) / 1000000}M`
        }
        if (minePerSecond >= 1000000000) {
            mineUpgrCost.innerHTML = `${(mineUpCost - mineUpCost % 1000000) / 1000000000}B`
        }
        if (score >= mineUpCost) {
            mineUpbtn.style.background = "green"
        }else {
            mineUpbtn.style.background = "rgb(80, 99, 80)"
        }
        
        localStorage.setItem("minePerSecond", minePerSecond)
        localStorage.setItem("mineUpCost", mineUpCost)
        //colors of buttons
        if (score < clickUpCost) {
            clickbtn.style.background = "rgb(80, 99, 80)"
        } 
        if (score >= rebirthCost) {
            rebirthbtn.style.background = "green"
        } else {
            rebirthbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= 1000) {
            cokebtn.style.background = "green"
        } else {
            cokebtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= 1000000) {
            bitCoinbtn.style.background = "green"
        } else {
            bitCoinbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= mineUpCost) {
            mineUpbtn.style.background = "green"
        }else {
            mineUpbtn.style.background = "rgb(80, 99, 80)"
        }
    }
}

let Rebirth = () => {
    if (score >= rebirthCost && rebirthCounter != 4) {
        
        
        
        score -= rebirthCost
        rebirthCounter += 1
        rebirthDisplay.innerHTML = rebirthCounter
        localStorage.removeItem('score')
        score = 0
        localStorage.removeItem('perClick')
        perClick = 1
        localStorage.removeItem('perClickPlus')
        perClickPlus = 4
        localStorage.removeItem('clickUpCost')
        clickUpCost = 10
        localStorage.removeItem('komka2')
        komka2 = 1
        localStorage.removeItem('perem')
        perem = 0
        localStorage.removeItem('perem2')
        perem2 = 0
        localStorage.removeItem('perem3')
        perem3 = 4
        a -= 1
        b -= 1
        localStorage.setItem("a", a)
        localStorage.setItem("b", b)
        if (score >= rebirthCost) {
            clickbtn.style.background = "green"
        } else {
            clickbtn.style.background = "rgb(80, 99, 80)"
        }
        if (rebirthCounter == 1){
            rebirthCost = 5000000 
            rebirthCostDisplay.innerHTML = "5M"
            
        }
        if (rebirthCounter == 2){
            rebirthCost = 10000000
            rebirthCostDisplay.innerHTML = "10M"
        }
        if (rebirthCounter == 3){
            rebirthCost = 50000000
            rebirthCostDisplay.innerHTML = "50M"
        }
        if (rebirthCounter == 4){
            rebirthCost = Infinity
            rebirthCostDisplay.innerHTML = "∞"
            rebirthDisplay.innerHTML = "Max"
        }
        perClickDisplay.innerHTML = perClick
        clickUpgrCost.innerHTML = clickUpCost
        perClickPlusDisplay.innerHTML = `+${perem3}`
        coins.innerHTML = score
        localStorage("rebirthCost", rebirthCost)
        localStorage("rebirthCounter", rebirthCounter)
        //colors of buttons
        if (score >= clickUpCost) {
            clickbtn.style.background = "green"
        } else {
            clickbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= rebirthCost) {
            rebirthbtn.style.background = "green"
        } else {
            rebirthbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= 1000) {
            cokebtn.style.background = "green"
        } else {
            cokebtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= 1000000) {
            bitCoinbtn.style.background = "green"
        } else {
            bitCoinbtn.style.background = "rgb(80, 99, 80)"
        }
        if (score >= mineUpCost) {
            mineUpbtn.style.background = "green"
        }else {
            mineUpbtn.style.background = "rgb(80, 99, 80)"
        }
    } else {
        if (rebirthCounter != 4){
            console.log("No coins")
        }
        else {
            console.log("Max rebirth")
        }
    }
}

let quests = () => {
    main.style.display = "none"
    Quests.style.display = "flex"
}

let buy = (item) => {
    if (item == "bitCoin") {
        if (score >= 1000000) {     

            
            score -= 1000000
            mainCoin.style.backgroundImage = "url('icons/bitCoinIcon.png')";
            bitCoin.style.display = "none"
            bitChecker = 1
            localStorage.setItem("bitChecker", bitChecker)
        }
    }
    if (item == "coke") {
        if (score >= 1000) {

            

            score -= 1000
            mainCoin.style.backgroundImage = "url('icons/cokeIcon.webp')";
            cokeCoin.style.display = "none"
            cokeChecker = 1
            localStorage.setItem("cokeChecker", cokeChecker)
        }
    }
            //colors of buttons
            if (score >= clickUpCost) {
                clickbtn.style.background = "green"
            } else {
                clickbtn.style.background = "rgb(80, 99, 80)"
            }
            if (score >= rebirthCost) {
                rebirthbtn.style.background = "green"
            } else {
                rebirthbtn.style.background = "rgb(80, 99, 80)"
            }
            if (score >= 1000) {
                cokebtn.style.background = "green"
            } else {
                cokebtn.style.background = "rgb(80, 99, 80)"
            }
            if (score >= 1000000) {
                bitCoinbtn.style.background = "green"
            } else {
                bitCoinbtn.style.background = "rgb(80, 99, 80)"
            }
            if (score >= mineUpCost) {
                mineUpbtn.style.background = "green"
            }else {
                mineUpbtn.style.background = "rgb(80, 99, 80)"
            }
}


// Функция, которая обновляет score
const updateScore = () => {
  score += minePerSecond;
  coins.innerHTML = score
    if (score >= 1000) {
        coins.innerHTML = `${(score - score % 10) / 1000}K`
    }
    if (score >= 1000000) {
       coins.innerHTML = `${(score - score % 10000) / 1000000}M`
    }
    if (score >= 1000000000) {
       coins.innerHTML = `${(score - score % 10000000) / 1000000000}B`
    }
    localStorage.setItem("score", score)
};

// Устанавливаем интервал, который вызывает updateScore каждую секунду
const Mining = setInterval(updateScore, 1000);

// Для примера остановим выполнение через 10 секунд


let restart = () => {
    clearInterval(Mining);
    localStorage.clear();   
}

