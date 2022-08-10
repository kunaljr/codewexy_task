import React,{useState} from 'react'

const HeadAndTail = () => {

    const [letters,setLetters] = useState<Array<String>>([])

    const onSubmit = () => {
        const selectedLetter : any = document.querySelector('#head_and_tail');
        const selectedLetterDiv : any = document.querySelector('#selectedLetters');
        if(selectedLetter?.value === ""){
            alert("Please select Value from Dropdown")
        }else{
            if(letters[letters?.length -1 ] === selectedLetter?.value){
                selectedLetterDiv!.lastElementChild.innerHTML += `<span>${selectedLetter?.value}</span>`
            }else{
                selectedLetterDiv!.innerHTML += `<div><span>${selectedLetter?.value}</span></div>`
            }
            setLetters([...letters,selectedLetter?.value])
            selectedLetter!.value = '' 
        }
    }
    
  return (
    <div>
        <select name="head_and_tail" id="head_and_tail" placeholder='Select Value'>
            <option value=''>Select Value</option>
            <option value="H">H</option>
            <option value="T">T</option>
        </select><br/>
        <button type="submit" onClick={onSubmit}>Submit</button>
        <div id="selectedLetters">
        </div>
    </div>
  )
}

export default HeadAndTail