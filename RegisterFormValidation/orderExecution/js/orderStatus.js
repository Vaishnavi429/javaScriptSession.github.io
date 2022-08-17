
const ChiefReceived=(orderNumber)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.getElementById(orderNumber).innerText ='chief received '
            resolve(orderNumber)
        },4000)
    })
}

const PizzaSauceAdded=(orderNumber)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.getElementById(orderNumber).innerText = 'Pizza Sauce Added'
            
            resolve(orderNumber)
        },10000)
    })
}
const firstLayerOfCheeseAdded=(orderNumber)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.getElementById(orderNumber).innerText = 'first Layer Of Cheese Added'
            resolve(orderNumber)
        },5000)
    })
}

    const toppingAdded=(orderNumber)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                document.getElementById(orderNumber).innerText ='Topping Added'
                resolve(orderNumber)
            },12000)
        })
    }
    const secondLayerOfCheeseAdded=(orderNumber)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                document.getElementById(orderNumber).innerText ='second Layer Of Cheese Added'
                resolve(orderNumber)
            },5000)
        })
    }
    const PizzaBaked=(orderNumber)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                document.getElementById(orderNumber).innerText ='Pizza Baked'
                resolve(orderNumber)
            },8000)
        })
    }

    const oreganoAdded=(orderNumber)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                document.getElementById(orderNumber).innerText ='Oregano Added'
                resolve(orderNumber)
            },2000)
        })
    }

    const PackageReceivedAtCounter=(orderNumber)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                document.getElementById(orderNumber).innerText ='Package Received At Counter'
                resolve(orderNumber)
            },2000)
        })
    }
    







