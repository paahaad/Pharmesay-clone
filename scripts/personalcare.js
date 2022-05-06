document.getElementById("Personal_Care").checked = true

const req = ()=>{
    fetch("http://localhost:4000/personal").then(res=>res.json()).then(res=>append(res)).catch(e=>console.log(e));
}
req()


    let append = (res)=>{
        // console.log("here")
        console.log(res)
        res.map(({name,image_url,price,strikeofprice})=>{
            
            const div = document.createElement('div');
            div.setAttribute('id','div1')
    
            const image = document.createElement('img');
            image.setAttribute("id","image")
            image.src = image_url;
    
            const title = document.createElement('h3');
            title.setAttribute("id","title")
            title.innerText = name;
    
            const strikeprice = document.createElement('h5');
            strikeprice.innerText= "MRP "+strikeofprice;
            strikeprice.setAttribute('id','strikeprice')
    
            const Price = document.createElement('h4');
            Price.innerText= "Rs"+price;
            Price.setAttribute('id','Price')
    
            div.append(image,title,strikeprice,Price)
    
            document.getElementById('right_div').append(div);
    
        })

        document.getElementById('Select_tag').addEventListener("click",()=>{
            let selected = document.getElementById('Select_tag').value
            // console.log(selected)
        
            if(selected === "HTL"){
  
            document.getElementById("right_div").innerHTML = null;

            res.sort((a,b) => b.price - a.price)

            res.map(({name,image_url,price,strikeofprice})=>{
            
            const div = document.createElement('div');
            div.setAttribute('id','div1')
    
            const image = document.createElement('img');
            image.setAttribute("id","image")
            image.src = image_url;
    
            const title = document.createElement('h3');
            title.setAttribute("id","title")
            title.innerText = name;
    
            const strikeprice = document.createElement('h5');
            strikeprice.innerText= "MRP "+strikeofprice;
            strikeprice.setAttribute('id','strikeprice')
    
            const Price = document.createElement('h4');
            Price.innerText= "Rs"+price;
            Price.setAttribute('id','Price')
    
            div.append(image,title,strikeprice,Price)
    
            document.getElementById('right_div').append(div);
    
        })


        }else if(selected === "LTH"){

            document.getElementById("right_div").innerHTML = null; 
            res.sort((a,b) => a.price - b.price)

            res.map(({name,image_url,price,strikeofprice})=>{
            
            const div = document.createElement('div');
            div.setAttribute('id','div1')
    
            const image = document.createElement('img');
            image.setAttribute("id","image")
            image.src = image_url;
    
            const title = document.createElement('h3');
            title.setAttribute("id","title")
            title.innerText = name;
    
            const strikeprice = document.createElement('h5');
            strikeprice.innerText= "MRP "+strikeofprice;
            strikeprice.setAttribute('id','strikeprice')
    
            const Price = document.createElement('h4');
            Price.innerText= "Rs"+price;
            Price.setAttribute('id','Price')
    
            div.append(image,title,strikeprice,Price)
    
            document.getElementById('right_div').append(div);
    
        })

        }
        
        
        })
       
    
       
    }
   
    

 

