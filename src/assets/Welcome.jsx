import Age from "./Age"
function Welcome(props) {
    if(props.name === "johnn" && props.age >18 && props.age <65){
        return (
            <div>
              <p>Welcome {props.name}</p>
              <Age age2 = {props.age}/>
            </div>
          )
    } else{
        return("not valid!")
    }

}

export default Welcome