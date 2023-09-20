import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/gift.css';
import { useNavigate } from 'react-router-dom';

function Gift() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  return (
      <div className='gift-container'>
        <div className='gift'>
          <motion.div
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='cardGift'
            style={{overflow:"hidden"}}
          >
            <div className={isOpen ? 'show' : ''}>
            
              <p>
                <h2>Mi niña preciosa,</h2>
                <p>No puedo creer lo rápido que ha pasado el tiempo y cómo hemos llegado hasta aquí. Pero lo que sí sé es que cada día que pasa, me enamoro más de ti.</p>
                <p>Me siento tan afortunado de tenerte en mi vida. A cada momento que pasa me doy cuenta de cuánto me haces feliz y cuánto significas para mí. Aunque nos separe la distancia, nunca me he sentido tan cerca de ti.</p>
                <p>Han pasado ya doce meses desde que decidimos tomar el riesgo de estar juntos, y mira! nos esta saliendo bien. Aunque ambos sabemos que sobrellevar la distancia no es lo más fácil, nos hemos dado cuenta que ha sido una oportunidad para que nuestro amor se haga más fuerte cada día que pasa. No importa cuánto tiempo estemos separados, siempre estaremos conectados por ese hilo invisible que hace que nos mantenga unidos.</p>
                <p>Recuerdo que al conocernos decía cualquier tontería para llamar tu atención, adulándote de lo bonita que estabas, tu inteligencia, tu sonrisa y tu corazón todo bonito me enamoraron de ti más rápido de lo que pude imaginar. Y ahora, después de un año, tengo la necesidad de decirte que te amo a cada momento, hasta creo que te molesta escucharlo cada rato, pero me importa tres hectareas de la que me quieres comer, debo recordarte que te amo. Creo que hacerte reir ahora es como una obligación ya que me hace emocionar como la primera vez.</p>
                <p>A través de los altibajos, los momentos felices y tristes, siempre he sentido tu amor incondicional. Me has apoyado en todo momento, me has dado consejos sabios (aunque sea un terco y a veces pida ayuda a ChatGPT). No hay palabras para describir lo agradecido que estoy por tenerte en mi vida. Me encanta la forma en que nos complementamos el uno al otro, cómo me haces sentir querido y cómo me inspiras a ser una mejor persona.</p>
                <p> Quiero abrazarte, besarte y decirte al oído cuánto te amo. Pero mientras tanto, seguiré escribiéndote cartitas como esta, esperando el día en que podamos estar juntos. Y me motiva tanto que ese día se acerca cada vez más. Tu no te imaginas lo que me emociona nuestro futuro juntos, de todas las cosas que tenemos en mente por hacer, los viajes que nos esperan y de los momentos que compartiremos.</p>
                <p>Eres mi niña hermosa, mi confidente, mi amor verdadero. Espero que puedas sentir el amor que siento por ti y que esta carta te haga sentir tan especial como lo eres para mí.</p>
                <p>Espero que hoy sientas todo el amor que tengo por ti y que este año todos nuestros planes se cumplan. No importa cuán lejos estemos el uno del otro, siempre estarás en mi corazón y en mis pensamientos.</p> 
                <p>Con todo mi amor,</p>
                <p><em>Manifestemos una vida bonita llena de amorcito y felicidad </em></p> 
                <h2>Feliz primer aniversario, mi amor.</h2> 
                <p>Te amo más allá de las palabras.</p> 
                <p>Con todo mi corazón,</p> 
                <p>Alex Fabian Carvajal Figueroa</p>
                
              </p>
              {isOpen && (
                <div 
                className='showGift'
                id='ButtonBackGift'
                onClick={()=> navigate('/home')}
                >Volver</div>
              )}
            </div>
          </motion.div>
          {!isOpen && (
            <motion.div
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='title'
              style={{overflow:"hidden"}}
            >
              Presioname!
            </motion.div>
           
          )}
          <img className={`Giftimg ${isOpen ? 'hide' : ''}`} src="https://i.pinimg.com/originals/de/6a/94/de6a94e5698fc1dfc6d348b5f63bdbe1.jpg" alt="" />
        </div>
      </div>
  );
}

export default Gift;