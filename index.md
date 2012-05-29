# FED tools <br> in the Ruby ecosystem

---

# Overview

<p data-class="intro" class="slide-id"></p>

-  What is Ruby
-  Great tools for FED:
	1. Sass
	2. Haml
	3. Middleman

---

# Ruby

<p data-class="ruby" class="slide-id"></p>
<p data-class="first" class="slide-id"></p>

-  Programming language
-  Released 1995
-  Yukihiro Matsumoto (Matz)
-  Making programmers happy
-  User experience focued
-  Leads to productivity and fun

<div class="matz"><img src="matz.jpg" /></div>

---

# Examples

<p data-class="ruby examples" class="slide-id"></p>

	"Jimmy".reverse  ➟ ymmiJ

> hi

	5.times { print "Odelay!" } 
	
	➟ Odelay!Odelay!Odelay!Odelay!Odelay!

<!-- <div class="logo" style="display:none; background: white; padding: 1em; display: inline-block; float: left;"><img src="ruby.gif" /></div> -->

---

# Ecosystem

<p data-class="ruby ecosystem" class="slide-id"></p>

Tools in the spirit of its philosophy

---

# Syntactic sugar

<p data-class="intro" class="slide-id"></p>
<p data-class="syntactic-sugar" class="slide-id"></p>

*syntax* within a *programming language* that is designed to   
make things *easier* to read or to express.


	5.times { print "Odelay!" }

	↓

	for (int i = 0; i < 5; i++) {
		print "Odelay!";
	}

<p style="clear:both; padding-top: 1em;">"5.times" is native, simple & clean</p>

---

# Sass

<p data-class="sass" class="slide-id"></p>

<div class="logo"><img src="sass.gif" /></div>

-  Ruby is fun! so should CSS be
-  Variety of syntactic sugars for CSS
-  Compiles to standard CSS

---


# Nesting

<p data-class="sass" class="slide-id"></p>
<p data-class="nesting" class="slide-id"></p>

	/* SCSS */

	table {
	  td {
	    padding: 1em;
	  }
	}

> hi 

	/* CSS */

	table td {
	  padding: 1em;
	}

---

# Variables

<p data-class="sass" class="slide-id"></p>
<p data-class="variables" class="slide-id"></p>

	/* SCSS */

	$blue: #0000FF;

	a {
	  color: $blue;
	}

> hi 

	/* CSS */

	a {
	  color: #0000FF;
	}

---

# And more

<p data-class="sass more" class="slide-id"></p>

-  functions
-  loops
-  conditions
-  ...

<p style="clear: both; padding-top: 2em; font-size: 150% !important;">Developing with Sass is more powerful and clean.</p>

---

# (web) Template Engine

<p data-class="intro template-engine" class="slide-id"></p>

Software that is designed to process web *templates* and *content* information to produce output web *documents*.

---

# Haml

<p data-class="haml first" class="slide-id"></p>

<img src="haml.gif" />

-  Syntactic sugars for HTML
-  Template Engine for Ruby on Rails
-  "Markup should be beautiful"

---

# Example

<p data-class="haml example" class="slide-id"></p>

	#profile
		.left.column
			#date= print_date
			#address= current_user.address
		.right.column
			#email= current_user.email
			#bio= current_user.bio

> hi

	<div id="profile">
	  <div class="left column">
	    <div id="date"><%= print_date %></div>
	    <div id="address"><%= current_user.address %></div>
	  </div>
	  <div class="right column">
	    <div id="email"><%= current_user.email %></div>
	    <div id="bio"><%= current_user.bio %></div>
	  </div>
	</div>	

---

# Middleman

<p data-class="middleman first" class="slide-id"></p>

<img src="middleman.png" />

-  command-line tool
-  static websites
-  modern tools
	1. Sass, Haml
	2. Templates, Layouts & Partials
	3. CoffeeScript, Compass
	4. Frontend Optimization,...
	

--- 

# Usage

<p data-class="middleman usage" class="slide-id"></p>

	$ middleman init my_project
	$ cd my_project

 > hi

	$ middleman server
	>> Listening on localhost:4567, CTRL+C to stop

<p style="clear: both; padding-top: 2em;">and we can start using these great tools</p>


---

# We talked about...

<p data-class="outro summary" class="slide-id"></p>

-  Why Ruby is awsome
-  Sass
-  Haml
-  Middleman

---

# The End

<p data-class="outro thankyou" class="slide-id"></p>

-  by Rotem Harel
-  Presentation created with <a href="https://github.com/n1k0/landslide">landslide</a>
-  Thank you!
