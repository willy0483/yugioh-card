# Template



make and css hover effect on this html 
    <main>
        <section class="image-container">
        <figure>
            <img src="assets/images/Svg/The Eye of Timaeus.svg" alt="The Eye of Timaeus">
        </figure>
    </section>
    </main>

and this css


/* #region Global*/
*{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Poppins", sans-serif;
}

:root {
    /* Theme colors */
    --dark-navy: #1B262C;
    --medium-blue: #0F4C75;
    --light-blue: #3282B8;
    --very-light-blue: #BBE1FA;
  
    /* Text colors */
    --text-primary: var(--very-light-blue);
    --text-secondary: var(--light-blue);

    /* Black / White */
    --white: #fff;
    --black: #000;
    --dark: #212121;
    /* Background colors */
    --background: var(--dark-navy);
    --background-alt: var(--medium-blue);
  }
/* #endregion */


body{
    background-color: var(--dark);
}


/* IMAGE */
.image-container{
    max-width: 400px;
    margin: 4rem auto;
}
.image-container img{
    display: block;
    width: 100%;
    border-radius: 20px;
}


so when i hover over the top left of the img it goes back and when i hover top rigth it goes back and when i hover buttom left goes back and when i hover buttom rigth it goes back and when i hover center it normal