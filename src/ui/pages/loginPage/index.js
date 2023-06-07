import "./loginPage.css"

export default function LoginPage(){
    return(
        <div className="LoginPage">
            <div className="container">
                <h1>Tela de login</h1>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="fulano@gmail.com" id="email"/>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" placeholder="******" id="password"/>
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    )
}