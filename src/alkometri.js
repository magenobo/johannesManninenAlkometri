import React, {useState} from 'react';


export default function Blood() {
    const [weight, setWeight] = useState(0);
    const [gender, setGender] = useState("Male");
    const [amount, setAmount] = useState(0);
    const [time, setTime] = useState(0);
    const [result, setResult] = useState(0);

  
  
  
  function handleSubmit(e){
      e.preventDefault(); 

      var viinanmäärä = 0;
  
      const liiteli = amount * 0.33;
      const paakeli = liiteli * 8 * 4.5;
      const plinplinplon = weight / 10;
      const paakelivasku = paakeli - (plinplinplon * time);
  
      if (gender === "Male") {
  
        viinanmäärä = (paakelivasku / (weight * 0.7));
  
      } else {
        viinanmäärä = (paakelivasku / (weight * 0.6));
      };
      setResult(viinanmäärä);
  
  }

  return (
    <form  onSubmit={handleSubmit}>
      <div>
        <p>Alkoholilaskuri</p>
      </div>
      <fieldset>
      <div>
        <label>Paino</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        
          <label>Sukupuoli
          <br></br>
            <input type="radio" name="gender" value={gender}  onChange={e => setGender('Female')}  /> Nainen <br></br>
            <input type="radio" name="gender" value={gender} defaultChecked onChange={e => setGender('Male')}  /> Mies
          </label>
        
      </div>
      <div>
        {/* <label>Annosten määrä</label> */}
        {/* <input type="number" value={amount} onChange={e => setAmount(e.target.value)} /> */}
        <label>Annosten määrä </label>
          <select name="määrä" value={amount} onChange={e => setAmount(e.target.value)} id="amount">
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
            <option value="6" >6</option>
            <option value="7" >7</option>
            <option value="8" >8</option>
            <option value="9" >9</option>
            <option value="10" >10</option>
          </select>
        </div>
      <div>
       
          <label>Tuntien määrä </label>
            <select name="aikaa" value={time} onChange={e => setTime(e.target.value)} id="time">
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
                <option value="6" >6</option>
                <option value="7" >7</option>
                <option value="8" >8</option>
                <option value="9" >9</option>
                <option value="10" >10</option>
              </select>
           
          </div>
          </fieldset>
      <button>Laske</button>
      <br></br>
      <output>Veresi alkoholipitoisuus on {result.toFixed(2)} promillea</output>
    
  
  
    </form>
  )
}
  