import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src='/fundo.png' className='imagem-fundo'/>
        <div className='float'>
        <header className="cabeçalho">
            <a>Meditate</a>
            <ul className='ul'>
            <li><a href="Articles.js">Articles</a></li>
            <li><a>Meditation</a></li>
            <li><a>Sleep cicle</a></li>
            </ul>
            <button className="login">Log In</button>
            </header>
            <div className='corpo'>
            <h1>Get enought Sleep <br/> Thanks to Meditate</h1>
            <button className='start'>Start for free</button>
          </div>
        </div>
        </div>
        <div className='segundo-corpo'>
          <div className='segundo-texto'>
            <h1>How sleep <br/> Meditation Works</h1>
            <h3>Healthy sleep has more to do with quality of rest than of hours</h3>
          </div>
          <div className='colunas'>
            <div className='Coluna1'>
              <h2>Benefits of Sleep Meditation</h2>
              <h2>Who Should Use Sleep Meditation</h2>
              <h2>Sleep Meditation</h2>
            </div>
            <div className='Coluna2'>
              <h4>Meditation likely promotes sleep by reducing pain sensivity and stress, both os witch can disturb sleep.
                 The research around meditation and how it works to reduce anxiety, depression, and pain is angoing.</h4>
              <h4>Sleep meditation may benefit those who have difficulty falling asleep.
                 One sotudy of people with insomnia repoted reduction in time spent lying awake, psychological arousal,
                  and overall symptoms severety</h4>
              <h4>Sleep meditation can be as simple as breathing in while counting to four and breathing out while counting to four.
                 Four by breathing, or box breathing, is a common wuick and effective meditation</h4>
            </div>
          </div>
        </div>
        <div className='terceiro-corpo'>
          <img src='fundo 3.png'/>
        </div>
        <div className='quarto-corpo'>
          <h1>Sleep Effectiveness<br/>Weekly Chart</h1>
          <img src='imagem fundo 4.png'/>
        </div>
        <div className='quinto-corpo'>
          <h1>Studies have found that the practice of meditation reduces pain-related activity in the thalamus, which is a small sensory structure in the brain.
             Meditation likely affects multiple parts of the brain simultaneously, helping to reduce discomfort by changing the perception of it.</h1>
          <img src='icone-quinta.png'/>
        </div>
        <div className='sexto-corpo'>
        <div>
          <div className='Bolinha' cor='verde'/>
          <div>
          <h1>Relaxation</h1>
          <h4>Meditate helps you to relax, both physically and mentally. In the morning you ill fell refreshed and energized, ready for new things. Just try a 7-day free trial.</h4>
          </div>
        </div>
        <div>
          <div className='Bolinha' cor='amarelo'/>
          <div>
          <h1>Meditation</h1> 
          <h4>Meditation offers guided dream meditations as well as soothing sounds of nature and music, stories. You can use meditates offline if are away from WI-FI.</h4>
          </div>
          </div>
        <div> 
          <div className='Bolinha' cor='rosa'/>
          <div>
          <h1>Calmnesss</h1>
          <h3 numero='ultima'>Usually people cannot fall asleep due stress, everyday life, same of thei experiences. Meditates calms, gives the user a distraction from evereday life, this is hi mais secret.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
