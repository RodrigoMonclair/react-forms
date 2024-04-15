import "./App.css";
import FormComplexos from "./components/FormComplexos";
import FormIdade from "./components/FormIdade";
import FormSimples from "./components/FormSimples";
import FormLogin from "./components/FormLogin";

function App() {
   return (
      <>
         <div>
            <h1>Form Simples</h1>
            <p>
               São formulários que cuidam apenas de um campo de input. Nesse
               {/* exemplo abaixo, o componente FormSimples tem apenas um campo "Nome". */}
            </p>
            <p>
               nota: como o state é referente a apenas um input, não tem
               necessidade de guardar ele dentro de um objeto.
            </p>

            {/* <code>const [nome, setNome] = useState("");</code> */}

            <FormSimples />
            <FormIdade />
            {/* INVOCAR AQUI O COMPONENTE DO EXERCÍCIO FORM IDADE */}
         </div>

         <div className="notas">
            <p>
               O React não tem um sistema de formulários, então é necessário
               criar um state para cada campo de input, então se tornam inputs
               controlados, ou seja, possuem um atributo value que é atribuido a
               um state. Quando o usuário digita algo no input, o state é
               atualizado e o input é renderizado novamente com o novo valor.
            </p>
         </div>

         <div>
            <h1>Form Complexo </h1>
            <p>
               São formulários que possuem vários inputs atribuidos a um mesmo
               state. É criado um objeto onde cada propriedade é resposável por
               guardar o valor de um input. No exemplo abaixo, o componente
               {/* FormComplexo tem dois campos "Nome" e "Idade". */}
            </p>
            <small>Olhe seu console enquanto digita</small>

            <FormComplexos />
            <FormLogin />
            {/* INVOCAR AQUI O COMPONENTE DO EXERCÍCIO FORM LOGIN */}
         </div>

         <div id="EXERCÍCIO 3 COLOCAR DENTRO DESSA DIV"></div>
      </>
   );
}

export default App;
