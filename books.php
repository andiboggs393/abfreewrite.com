<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Books </title>
   
<link href="https://fonts.googleapis.com/css?family=Charm|Indie+Flower|Lobster|Pacifico" rel="stylesheet">
<link rel="stylesheet" href="css/hamburger-style.css"/> 


 <!-- REACT LIBRARY -->
  <script src="https://unpkg.com/react@15.5.4/dist/react.js"></script>
  <!-- REACT DOM LIBRARY -->
  <script src="https://unpkg.com/react-dom@15.5.4/dist/react-dom.js"></script>
  <!-- BABEL LIBRARY -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>


  
</head>
<body>

<div class="container">
			<nav class="navbar">
				<div class="hamburger-menu">
					<div class="line line-1"></div>
					<div class="line line-2"></div>
					<div class="line line-3"></div>
				</div>
				

				<ul class="nav-list">
					
					
		<li class="nav-item">
			<a href="February2019/name-the-problem.html" class="nav-link">Coding</a>
					</li>

<li class="nav-item"><a href="February2019/solving-a-circle.html" class="nav-link">Circles</a>
					</li>
<li class="nav-item">
						<a href="index.html" class="nav-link">Home</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">Books</a>
					</li>
					<li class="nav-item">
						<a href="NavComponents/space.html" class="nav-link">Space</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link"></a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link"></a>
					</li>
				</ul>
			</nav>
		</div>
		<script src="js/hamburger-script.js"></script>

<div id="app">React has not rendered yet.</div>

  <script type="text/babel">


let Love = function(props) {

      let odds = {
                display: 'inline-block', 
                backgroundColor: props.bc, 
                color: props.colour,
		borderRadius: 20, 
		fontFamily: props.font, 
		
		width: props.width, 
		padding: 5,
                marginTop: props.top}


      var blockStyle= {
		fontSize: 14,
                fontFamily: 'Quicksand',
		backgroundColor: '#fff'}

      var average = {
               width: props.pixwidth, 
               height: props.pixheight, 
               marginBottom: 3}

 var icon = {
     marginTop: -100
}

      return(
      <div>
        	
        			<table><tr>
                                     <td>
                                       <h3 style={odds}><img style={icon} src={props.icon}/>
                                        <a href={props.link}> {props.title}</a></h3>
                                         
        				<img src={props.photo} alt={props.alt} style={average}/>
        				
        		<blockquote style={{width: '245px', marginLeft: '-2', padding: '12', fontFamily: 'Lora', fontSize: '17', backgroundColor: 'GhostWhite', borderBottom: '3px dotted red', borderLeft: '3px dotted CadetBlue', borderRight: '3px dotted CadetBlue'}}>{props.quote}</blockquote>
        			</td>

        			
        		</tr>
        		

      		</table>
  		</div>
      );
    }



function BookList(props){
   let contentUp = {marginTop: -615}
  var bookStyle = {display: 'inline-block'}
  var books = props.books;
  
  var thrillers = props.books.filter(function(buch){
    return buch.genre === "science";
  }).map(function(buch){
    return <div style={bookStyle}>
        <CoverArt img = {buch.img}/> 
      </div>
  });

  var economic = props.books.filter(function(buch){
        return buch.genre === "economics";
    }).map(function(buch) {
      return <div style={bookStyle}>
          <CoverArt img = {buch.img}/> 
        </div>
  });

  var space = props.books.filter(function(buch){
        return buch.genre === "biography";
    }).map(function(buch) {
      return <div style={bookStyle}>
          <CoverArt img = {buch.img}/> 
        </div>
  });

  var culture = props.books.filter(function(buch){
        return buch.genre === "culture";
    }).map(function(buch) {
      return <div style={bookStyle}>
          <CoverArt img = {buch.img}/> 
        </div>
  });

  var policing = props.books.filter(function(buch){
        return buch.genre === "policing";
    }).map(function(buch) {
      return <div style={bookStyle}>
          <CoverArt img = {buch.img}/> 
        </div>
  });

var computers = props.books.filter(function(buch){
        return buch.genre === "computers";
    }).map(function(buch) {
      return <div style={bookStyle}>
          <CoverArt img = {buch.img}/> 
        </div>
  });

  var secrets = props.books.filter(function(buch){
        return buch.genre === "secrets";
    }).map(function(buch) {
      return <div style={bookStyle}>
          <CoverArt img = {buch.img}/> 
        </div>
  });

  return(
    <div style={contentUp}>
      <h1>Science</h1>
      <div>
        {thrillers}
      </div>
      <hr/>
      <h1>Economics </h1>
      <div>
        {economic}
      </div>
      <hr/>
      <h1>Adventure</h1>
      <div>
        {space}
      </div>
<hr/>
      <h1>Culture </h1>
      <div>
        {culture}
      </div>
<hr/>
      <h1>Policing </h1>
      <div>
        {policing}
      </div>
<hr/>
<h1>Computers</h1>
      <div>
        {computers}
      </div>
    
<hr/>
      <h1>Forbidden literature</h1>
      <div>
        {secrets}
      </div>
    </div>
  );
}
  

  function CoverArt(props){
  var coverStyle ={
      height: 300, 
      width: 200, 
      marginTop: 20, 
      marginLeft: 20,
      backgroundColor: '#fff',
      zIndex: -1,
      WebkitFilter:"drop-shadow(0px 0px 5px #555)",
      Filter: "drop-shadow(0px 0px 5px #555)"

    }
  return(
    <img src={props.img} style={coverStyle}/>
  )
}





var books = [
{id:1, genre:"biography", img:"assets/endurance-kelly.jpg"},
{id:2, genre:"economics", img:"assets/growth-question.jpg"},
{id:3, genre:"policing", img:"assets/end-of-policing.jpg"},
{id:4, genre:"secrets", img:"assets/operation-paperclip.jpg"},
{id:5, genre:"economics", img:"assets/hiding-in-plain-sight.png"},
{id:6, genre:"culture", img:"assets/hood-feminism.png"},
{id:7, genre:"science", img:"assets/emerging-viruses-clear.png"},
{id:8, genre:"science", img:"assets/plague-of-corruption-clear.png"},
{id:9, genre:"science", img:"assets/genebook.jpg"},
{id:10, genre:"secrets", img:"assets/epstein-book.jpg"},
{id:11, genre:"secrets", img:"assets/drmarysmonkeyhaslum.png"},
{id:12, genre:"culture", img:"assets/dark-money.png"},
{id:13, genre:"computers", img:"assets/softwar.jpg"},
{id:14, genre:"computers", img:"assets/beyond-the-valley.jpg"},
{id:15, genre:"culture", img:"assets/black-hearts.jpg"},
{id:16, genre:"secrets", img:"assets/me-lee-judyth-vary-baker.png"},
{id:17, genre:"culture", img:"assets/scandal-of-scientology.png"},
{id:18, genre:"computers", img:"assets/abolish-sv-book.png"}
]; 

class Warnings extends React.Component {
       onButtonTouch() {
       alert("Ouch!");
     }

      onButtonDrink() {
      alert("Brain freeze!");
    }

  		render() {
  			return(
  				<div>
  					<h1>Life Warnings</h1>
            <button onClick={this.onButtonTouch}>touch stove</button>
            <button onClick={this.onButtonDrink}>drink Slurpee really fast</button>
  				</div>
  			);
	  }
	}

  	


ReactDOM.render(
  <div>
    <BookList books={books}
    />
 
<Warnings/>

  </div>, 
  document.getElementById("app")
); 


    </script>
</body>
</html>