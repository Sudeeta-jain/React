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

## Register.tsx

Created a uservariable using useState() 

const [user, setUser]= useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    
  In return created some textbox and button

In return created some textbox and button and implemented onChange functionality of textbox and handled the onClick functionality of button as

const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            localStorage.setItem("MyUser", JSON.stringify(user))
            alert("account created")
            history.push("/login")
            }else {
            alert("invlid input")
        }
        
    }
