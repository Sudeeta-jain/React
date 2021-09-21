## Created a React app
Create a react app using npx create-react-app -template typescript command.

Created a components folder and inside it created 3 folders named login, home and register.

Created a tsx and css file for every folder of component.

In the css file, styled the Button, textbox on login, register and homepage.

## Login.tsx
Create a user variable using useState() 

const [user, setUser]= useState({
    email:"",
    password:"",
  })

In return created a button and textbox and on taking input in the text box implemented onChange functionality and handled the change by

const handleChange=(e: any) =>{
    const {name, value} = e.target
    setUser({
        ...user,
        [name]:value
    })
  }

And same way implemented onClick functionality of button and handle the click

onClick it will check if email and password matche to the one stored in the local storage. If email and password get matched then user get logged in to the home page else give invalid message and user get redirected to login page again

const handleLogin =(e: any) =>{

    e.preventDefault();
    var strpass= (localStorage.getItem('Email')?.replace(/"/g, ""));
    var strpass1= (localStorage.getItem('Password')?.replace(/"/g, ""));
    console.log(strpass)
    if (strpass===(user.email) && strpass1===(user.password)){
        alert("Login Successfully")
        history.push("/home")
      } else{
        alert("Wrong Credentials")
        history.push("/")
      }
    } 

## Register.tsx

Created a uservariable using useState() 

 const [email1, setEmail]= useState("")
   const [password1,setPassword]= useState("")
    const [reEnterPassword, setReEnterPassword]= useState("")

    
  In return created some textbox and button

In return created some textbox and button and implemented onChange functionality of textbox and handled the onClick functionality of button as

const register = () => {
       
        if( email1 && password1&&(password1===reEnterPassword)){
            localStorage.setItem("Email", JSON.stringify(email1))
            localStorage.setItem("Password", JSON.stringify(password1))
            localStorage.setItem("Re-enter", JSON.stringify(reEnterPassword))
            alert("account created")
            history.push("/")
            }else {
            alert("invlid input")
        }
        
    }
    
On clicking th eregister if email and password is given then account will be created or else will show error message that invalid input.

## Home.tsx

On home page I have created a Logout button which when clicked take user back to login page and on hamepage there will dispaly a text Welcome to homepage.

