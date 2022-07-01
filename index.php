<?php include_once("./../includes/funciones.php"); ?>
<!DOCTYPE html>
<html lang='en'>
    <head>
        <?php include_once ('./../includes/head.php'); ?>
    </head>

	<body>
      
		<div style='display: none;' id='content'>

			<div data-name="general-data">

				<div data-name="menu">

					<div data-name="contact">

						<div data-name="headline">Contact</div>

						<div data-name="columns">
							
							<div data-name="column">
								David Berruezo
								<br>
								Programador
								<br>
								Barcelona
								<br>
								Spain
							</div>
							
							<div data-name="column">
								+34 615 23 15 33<br>
								<a href="#" target="_top">davidberruezo@davidberruezo.com</a>

							</div>
							
							<div data-name="column">
								For job or an<br>
								interview please write<br>
								<a href="#" target="_top">davidberruezo@davidberruezo.com</a><br><br>
							</div>
							
						</div>
					</div>

					<div data-name="footer">
						<div data-name="copyright" >Copyright 2018 © <a target="_blank" href="https://davidberruezo.com">https://davidberruezo.com</a></div>
						<div data-name="cvr" >+34 615 23 15 33</div>
					</div>

					<div data-name="social">
						<div data-name="facebook" data-link="https://www.facebook.com/davidberruezo">Facebook</div>
						<div data-name="linkedin" data-link="https://www.linkedin.com/david-berruezo">LinkedIn</div>
						<div data-name="instagram" data-link="https://www.instagram.com/davidberruezo/">Instagram</div>
						<div data-name="twitter" data-link="https://twitter.com/davidberruezo/">Twitter</div>
					</div>
				</div>

				<div data-name="pagefooter">
					<div data-name="email"><a href="#" target="_top">davidberruezo@davidberruezo.com</a></div>
					<div data-name="phone">+34 615 23 15 33</div>
				</div>

			</div>
			<!-- general data -->

			<div data-name="pages">

				<div data-path='home' data-template="home">
					
					<div data-submenu="yes" data-name="menu">Home</div>
            
					<div data-name="frontpage">
						
						<div data-name="founded">
							David Berruezo
							<br>
							Programador
							<br>
							Barcelona
							<br>
							Spain
						</div>

						<!--
						<div data-name="link" data-link="projects">Selected Projects</div>
						-->
						
						<div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
						<div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
						<div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>


                        <div data-name="body">
                            Full Stack Developer<br>
                            Frontend: JavaScript , es6|7 css3 , sass<br>
                            Backend: PhP , MySQL<br>
                            Cms: WordPress , Prestashop<br>
                            Frameworks: CodeIgniter , Symfony, Laravel , Zend
                            <br>
                        </div>
						
					</div>


					<div data-name="stories">

                  <div data-name="story">
                     <div data-name="date">September 15 — 2021</div>
                     <div data-name="headline">Llafranc Villas</div>
                     <div data-name="body">
                        <div>
                           <b>Llafranc Villas</b>
                           <br> 
                           Tourism Website | WordPress
                           <br>
                           Reservation System
                           <br>
                           <a target="_blank" href="https://www.llvillas.com">https://www.llvillas.com/</a>   
                        </div>
                     </div>
                     <div data-name="image-tag-name">Llafranc Villas</div>
                     <div data-name="images">
                        <div data-name="image"><?php echo $url; ?>upload/llafranc_villas/nueva2/plantilla_imagen_1.png</div>
                        <div data-name="image"><?php echo $url; ?>upload/llafranc_villas/nueva2/plantilla_imagen_2.png</div>
                     </div>
                  </div>

                  <div data-name="story">
                     <div data-name="date">February 01 — 2021</div>
                     <div data-name="headline">Home Sweet Home Villas</div>
                     <div data-name="body">
                        <div>
                           <b>Home Sweet Home Villas</b>
                           <br> 
                           Tourism Website | CodeIgniter
                           <br>
                           Reservation System
                           <br>
                           <a target="_blank" href="https://www.homesweethomevillas.com/">https://www.homesweethomevillas.com/</a>   
                        </div>
                     </div>
                     <div data-name="image-tag-name">Home Sweet Home Villas</div>
                     <div data-name="images">
						 <div data-name="image"><?php echo $url; ?>upload/homesweethomevillas/nueva2/plantilla_imagen_1.png</div>
						 <div data-name="image"><?php echo $url; ?>upload/homesweethomevillas/nueva2/plantilla_imagen_2.png</div>
                     </div>
                  </div>

                     <div data-name="story">
                         <div data-name="date">January 01 — 2021</div>
                         <div data-name="headline">Box34 | Peugeot</div>
                         <div data-name="body">
                             <div>
                                 <b>Box34 | Peugeot</b>
                                 <br>
                                 Incidence Manager Backend
                                 <br>
                                 <a target="_blank" href="https://taller.concesionariobox34.com">https://taller.concesionariobox34.com</a>
                             </div>
                         </div>
                         <div data-name="image-tag-name">eCommerce Bacelona</div>
                         <div data-name="images">
                             <div data-name="image"><?php echo $url; ?>upload/box34/plantilla_1.png</div>
                             <div data-name="image"><?php echo $url; ?>upload/box34/plantilla_2.png</div>
                         </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">September 02 — 2020</div>
                        <div data-name="headline">PisosEnManresa eCommerce</div>
                        <div data-name="body">
                           <div>
                              <b>PisosEnManresa</b>
                              <br>
                              eCommerce website
                              <br>
                              <a target="_blank" href="https://www.pisosenmanresa.com">https://pisosenmanresa.com</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/pisosenmanresa/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/pisosenmanresa/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">October 29 — 2018</div>
                        <div data-name="headline">Ofichairs</div>
                        <div data-name="body">
                           <div>
                              <b>Ofichairs</b>
                              <br> 
                              Online store
                              <br>
                              Prestashop store
                              <br>
                              <a target="_blank" href="https://ofichairs.com/">https://ofichairs.com/</a>   
                           </div>
                        </div>
                        <div data-name="image-tag-name">Ofichairs</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/ofichairs/imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/ofichairs/imagen_2.png</div>
                        </div>
                     </div>   

                     <div data-name="story">
                        <div data-name="date">Jannuary 15 — 2019</div>
                        <div data-name="headline">Oracle - Mrw Webservice</div>
                        <div data-name="body">
                           <div>
                              <b>Oracle - Mrw Webservice</b>
                              <br> 
                              Oracle queries by PHP OCI8
                              <br>
                              Connect to MRW Webservice by SOAP PHP
                              <br>
                              <a target="_blank" href="#">Only for test</a>   
                           </div>
                        </div>
                        <div data-name="image-tag-name">Oracle - Mrw Webservice</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/mrw-ofichairs/plantilla_imagen_1.jpg</div>
                           <div data-name="image"><?php echo $url; ?>upload/mrw-ofichairs/plantilla_imagen_2.jpg</div>
                        </div>

                     </div>

                     <div data-name="story">
                        <div data-name="date">October 02 — 2002</div>
                        <div data-name="headline">Hostal Paris Barcelona Slideshow</div>
                        <div data-name="body">
                           <div>
                              <b>Hostal Paris Barcelona</b>
                              <br>
                              Slidewhow website
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/hostalparisbcn">https://davidberruezo.com/hostalparisbcn</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">October 15 — 2002</div>
                        <div data-name="headline">Hostal Paris Barcelona Store</div>
                        <div data-name="body">
                           <div>
                              <b>Hostal Paris Barcelona</b> 
                              <br>
                              Prestashop Store
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/hostalparisbcn/hotel">https://davidberruezo.com/hostalparisbcn/hotel</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_tienda/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_tienda/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">November 5 — 2002</div>
                        <div data-name="headline">Your Spanish Wine Slideshow</div>
                        <div data-name="body">
                           <div>
                              <b>Your Spanish Wine</b> 
                              <br>
                              Slidewhow website
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/yourspanishwine/html">https://davidberruezo.com/yourspanishwine/html</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/yourspanish_wine_slideshow/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/yourspanish_wine_slideshow/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">Desember 01 — 2002</div>
                        <div data-name="headline">Your Spanish Wine Tienda</div>
                        <div data-name="body">
                           <div>
                              <b>Your Spanish Wine Barcelona</b> 
                              <br>
                              Prestashop store
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/yourspanishwine/html/tienda">https://davidberruezo.com/yourspanishwine/html/tienda</a>
                              </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/yourspanish_wine_tienda/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/yourspanish_wine_tienda/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">Desember 15 — 2002</div>
                        <div data-name="headline">2automocion</div>
                        <div data-name="body">
                           <div>
                              <b>2automocion</b> 
                              <br>
                              Prestashop store
                              <br>
                              <a target="_blank" href="http://2automocion.com">http://2automocion.com</a>
                              </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/2automocion/plantilla_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/2automocion/plantilla_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">January 15 — 2003</div>
                        <div data-name="headline">David Berruezo Portfolio</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo Portfolio</b> 
                              <br>
                              Zend Framework
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/davidberruezo/public_html/">https://davidberruezo.com/davidberruezo/public_html/</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">January 28 — 2003</div>
                        <div data-name="headline">David Berruezo Backend</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo Backend</b> 
                              <br>
                              Zend Framework
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/davidberruezo/public_html/admin/login">https://davidberruezo.com/davidberruezo/public_html/admin/login</a>
                           </div>
                          </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend_intranet/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend_intranet/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">February 01 — 2003</div>
                        <div data-name="headline">David Berruezo Blog</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo Blog</b> 
                              <br>
                              Wordpress Blog
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/davidberruezo/public_html/blog">https://davidberruezo.com/davidberruezo/public_html/blog</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend_blog/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend_blog/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">February 15 — 2003</div>
                        <div data-name="headline">David Berruezo Articles Blog</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo Articles Blog</b> 
                              <br>
                              Wordpress Articles Blog
                              <br>
                              <a target="_blank" href="https://www.davidberruezo.com/blog">https://www.davidberruezo.com/blog</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_articles/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_articles/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">March 02 — 2003</div>
                        <div data-name="headline">David Berruezo Portfolio</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo JavaScript</b> 
                              <br>
                              JavaScript Objects
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/">https://davidberruezo.com/</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">March 15 — 2003</div>
                        <div data-name="headline">David Berruezo Portfolio Intranet</div>
                        <div data-name="body">
                           <div>
                              <b>MVC Application</b> 
                              <br>
                              codeIgniter application
                              <br>
                              <a target="_blank" href="http://davidberruezo.com/admin">http://davidberruezo.com/admin</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio_intranet/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio_intranet/plantilla_imagen_2.png</div>
                        </div>
                     </div>   

						<div data-name="story">
							<div data-name="date">September 29 — 2017</div>
                     <div data-name="headline">Universal</div>
                     <div data-name="body">
                        <div>
                           <b>Universal Holliday Centre</b>
                           <br> 
                           reservation system
                           <br>
                           codeIgniter Application
                           <br>
                           <a target="_blank" href="https://www.universalholidaycentre.com/">https://www.universalholidaycentre.com/</a>   
                        </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
                          <div data-name="image"><?php echo $url; ?>upload/universal/plantilla_imagen_1.png</div>
                          <div data-name="image"><?php echo $url; ?>upload/universal/plantilla_imagen_2.png</div>
							</div>
						</div>

						<div data-name="story">
							<div data-name="date">October 16 — 2017</div>
                     <div data-name="headline">MH Apartments</div>
                     <div data-name="body">
                       <div>
                          <b>MH Apartments</b>
                          <br>
                          reservation system
                          <br>
                          codeIgniter Application
                          <br>
                          <a target="_blank" href="https://www.mhapartments.com/">https://www.mhapartments.com/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
                         <div data-name="image"><?php echo $url; ?>upload/mhapartments/plantilla_imagen_4.png</div>
                         <div data-name="image"><?php echo $url; ?>upload/mhapartments/plantilla_imagen_5.png</div>
							</div>
						</div>

						<div data-name="story">
							<div data-name="date">November 13 — 2017</div>
                     <div data-name="headline">Hotel Villa Emilia</div>
                     <div data-name="body">
                        <div>
                           <b>Hotel Villa Emilia </b>
                           <br>
                           luxury website
                           <br>
                           codeIgniter Application
                           <br>
                           <a target="_blank" href="https://www.hotelvillaemilia.com/">https://www.hotelvillaemilia.com/</a>
                        </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					      <div data-name="image"><?php echo $url; ?>upload/hotelvillaemilia/plantilla_imagen_4.png</div>
                         <div data-name="image"><?php echo $url; ?>upload/hotelvillaemilia/plantilla_imagen_5.png</div>
                     </div>
						</div>

						<div data-name="story">
							<div data-name="date">Desember 27 — 2017</div>
                     <div data-name="headline">Yurbban Hotels</div>
                     <div data-name="body">
                       <div>
                          <b>Yurbban Hotels</b>
                          <br>
                          luxury landing website
                          <br>
                          codeIgniter Application
                          <br>
                          <a target="_blank" href="https://yurbban.com/es/">https://yurbban.com/es/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					      <div data-name="image"><?php echo $url; ?>upload/yurbbanhotels/plantilla_imagen_9.png</div>
                         <div data-name="image"><?php echo $url; ?>upload/yurbbanhotels/plantilla_imagen_10.png</div>
                     </div>
						</div>

						<div data-name="story">
							   <div data-name="date">January 20 — 2018</div>
                        <div data-name="headline">Yurbban Trafalgar</div>
                        <div data-name="body">
                          <div>
                             <b>Hotel Yurbban Trafalgar</b> 
                             <br>
                             Drupal hotel website
                             <br>
                             <a target="_blank" href="https://www.yurbbantrafalgar.com/es/">https://www.yurbbantrafalgar.com/es/</a>
                          </div>
                        </div>
                        <div data-name="image-tag-name">Emexs Marketing</div>
                        <div data-name="images">
                            <div data-name="image"><?php echo $url; ?>upload/yurbbantrafalgarhotels/plantilla_imagen_15.png</div>
                            <div data-name="image"><?php echo $url; ?>upload/yurbbantrafalgarhotels/plantilla_imagen_16.png</div>
							   </div>
						</div>

						<div data-name="story">
							<div data-name="date">February 1 — 2018</div>
                     <div data-name="headline">Yurbban Passage Hotels</div>
                     <div data-name="body">
                        <div>
                          <b>Hotel Yurbban Passage</b>
                          <br>
                          luxury landing website
                          <br>
                          <a target="_blank" href="https://www.yurbbanpassage.com/es/">https://www.yurbbanpassage.com/es/</a>
                        </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					      <div data-name="image"><?php echo $url; ?>upload/yurbbanpassagehotels/plantilla_imagen_19.png</div>
                       <div data-name="image"><?php echo $url; ?>upload/yurbbanpassagehotels/plantilla_imagen_20.png</div>
                     </div>
						</div>

						<div data-name="story">
							<div data-name="date">March 1 — 2018</div>
                        <div data-name="headline">Homiii</div>
                        <div data-name="body">
                           <div>
                              <b>Homiii</b>
                              <br>
                              Reservation system
                              <br>
                              codeIgniter Application
                              <br>
                              <a target="_blank" href="https://www.homiii.com/">https://www.homiii.com/</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">Emexs Marketing</div>
                        <div data-name="images">
                            <div data-name="image"><?php echo $url; ?>upload/homiii/plantilla_imagen_23.png</div>
                            <div data-name="image"><?php echo $url; ?>upload/homiii/plantilla_imagen_24.png</div>
							   </div>
						</div>


						<div data-name="story">
							<div data-name="date">April 21 — 2018</div>
                     <div data-name="headline">Emexs</div>
                     <div data-name="body">
                        <div>
                           <b>Emexs Website</b>
                           <br>
                           Innovation Website
                           <br>
                           nodeJS+Express Framework
                           <br>
                           <a target="_blank" href="https://emexs.es/">https://emexs.es/</a>
                        </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					      <div data-name="image"><?php echo $url; ?>upload/emexs/plantilla_imagen_27.png</div>
								<div data-name="image"><?php echo $url; ?>upload/emexs/plantilla_imagen_28.png</div>
							</div>
						</div>

						<div data-name="story">
							<div data-name="date">April 28 — 2018</div>
                        <div data-name="headline">Feel at Home</div>
                        <div data-name="body">
                           <div>
                              <b>Feel At Home</b>
                              <br>
                              reservation system
                              <br>
                              codeIgniter Application
                              <br>
                              <a target="_blank" href="https://www.feelathomeapartments.com/es/">https://www.feelathomeapartments.com/es/</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">Emexs Marketing</div>
                        <div data-name="images">
                             <div data-name="image"><?php echo $url; ?>upload/feelathome/plantilla_imagen_31.png</div>
                             <div data-name="image"><?php echo $url; ?>upload/feelathome/plantilla_imagen_32.png</div>
							   </div>
						</div>


						<div data-name="story">
							   <div data-name="date">June 20 — 2018</div>
                        <div data-name="headline">Casagrand</div>
                        <div data-name="body">
                           <div>
                              <b>Casagrand Hotel</b>
                              <br>
                              luxury website
                              <br>
                              codeIgniter Application
                              <br>
                              <a target="_blank" href="https://www.casagrand.com/es/">https://www.casagrand.com/es/</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">Emexs Marketing</div>
                        <div data-name="images">
								  <div data-name="image"><?php echo $url; ?>upload/casagrand/plantilla_imagen_36.png</div>
								  <div data-name="image"><?php echo $url; ?>upload/casagrand/plantilla_imagen_38.png</div>
							   </div>
                  </div>
                        
						<div data-name="story">
							<div data-name="date">June 28 — 2018</div>
                     <div data-name="headline">Grand Hotel Central</div>
                     <div data-name="body">
                       <div>
                          <b>Grand Hotel Central</b>
                          <br>
                          luxury website
                          <br>
                          Wordpress Application
                          <br>
                          <a target="_blank" href="https://www.grandhotelcentral.com/es/">https://www.grandhotelcentral.com/es/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					      <div data-name="image"><?php echo $url; ?>upload/grandhotelcentral/plantilla_imagen_40.png</div>
                         <div data-name="image"><?php echo $url; ?>upload/grandhotelcentral/plantilla_imagen_41.png</div>
                     </div>
                  </div>
                        
						<div data-name="story">
							<div data-name="date">Julay 02 — 2018</div>
                     <div data-name="headline">Aestrasteros</div>
                     <div data-name="body">
                        <div>
                           <b>Storage Room website</b>
                           <br>
                           Drupal Application
                           <br>
                           <a target="_blank" href="https://aesstrasteros.es/">https://aesstrasteros.es/</a>
                        </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					      <div data-name="image"><?php echo $url; ?>upload/aestrasteros/plantilla_imagen_46.png</div>
                         <div data-name="image"><?php echo $url; ?>upload/aestrasteros/plantilla_imagen_47.png</div>
                     </div>
						</div>

						<div data-name="story">
							<div data-name="date">Julay 29 — 2018</div>
                     <div data-name="headline">Primero Primera</div>
                     <div data-name="body">
                        <div>
                           <b>Primero Primera</b>
                           <br>
                           luxury website
                           <br>
                           codeIgniter Application
                           <a target="_blank" href="https://www.primeroprimera.com/">https://www.primeroprimera.com/</a>
                        </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					         <div data-name="image"><?php echo $url; ?>upload/primeroprimera/plantilla_imagen_51.png </div>
							</div>
						</div>


						<div data-name="story">
							<div data-name="date">August 01 — 2018</div>
                     <div data-name="headline">Avenida Palace</div>
                     <div data-name="body">
                       <div>
                          <b>Hotel Avenida Palace</b> 
                          <br>
                          luxury website
                          <br>
                          <a target="_blank" href="https://www.avenidapalace.com/es/">https://www.avenidapalace.com/es/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					         <div data-name="image"><?php echo $url; ?>upload/avenidapalace/plantilla_imagen_62.png</div>
					         <div data-name="image"><?php echo $url; ?>upload/avenidapalace/plantilla_imagen_62.png</div>
							</div>
                  </div>
                        
						<div data-name="story">
							<div data-name="date">August 08 — 2018</div>
                     <div data-name="headline">Royal Hotels</div>
                     <div data-name="body">
                       <div>
                          <b>Royal Hotels</b> 
                          <br>
                          luxury website
                          <br>
                          codeIgniter Application
                          <br>
                          <a target="_blank" href="https://www.royalhotelsbcn.com/es/">https://www.royalhotelsbcn.com/es/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					         <div data-name="image"><?php echo $url; ?>upload/royalhotels/plantilla_imagen_70.png</div>
					    	</div>
                  </div>
                        
						<div data-name="story">
							<div data-name="date">August 10 — 2018</div>
                     <div data-name="headline">Royal Passeig de Gracia Hotel</div>
                     <div data-name="body">
                       <div>
                          <b>Royal Hotel Passeig de Gr&agrave;cia</b> 
                          <br> 
                          reservation system
                          <br>
                          codeIgniter Application
                          <br>
                          website
                          <a target="_blank" href="https://www.royalpasseigdegraciahotel.com/es/">https://www.royalpasseigdegraciahotel.com/es/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					         <div data-name="image"><?php echo $url; ?>upload/royalpasseigdegraciahotel/plantilla_imagen_74.png</div>
						   </div>
                  </div>
                        
						<div data-name="story">
							<div data-name="date">September 6 — 2018</div>
                     <div data-name="headline">Royal Ramblas Hotel</div>
                     <div data-name="body">
                       <div>
                          <b>Royal Ramblas Webiste</b>
                          <br> 
                          luxury website
                          <br>
                          codeIgniter Application
                          <br>
                          <a target="_blank" href="https://www.royalramblashotel.com/es/">https://www.royalramblashotel.com/es/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
					            <div data-name="image"><?php echo $url; ?>upload/royalramblashotel/plantilla_imagen_80.png</div>
                     </div>
                  </div>
                        
						<div data-name="story">
							<div data-name="date">September 22 — 2018</div>
                     <div data-name="headline">Microdent System</div>
                     <div data-name="body">
                       <div>
                          <b>Microdent</b> 
                          <br>
                          Odontology website
                          <br>
                          <a target="_blank" href="https://microdentsystem.com/">https://microdentsystem.com/</a>
                       </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                       <div data-name="images">
					        <div data-name="image"><?php echo $url; ?>upload/microdentsystem/plantilla_imagen_89.png</div>
							</div>
                  </div>

					</div>
               <!-- stories -->

            </div>
            <!-- home -->


            <!-- data-path='resume' data-template="profile" -->
            <div data-path='ecommerce' data-template="ecommerce">
               
               <div data-menu="home" data-name="menu">ecommerce</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        eCommerce Barcelona 360<br>
                        small agency based<br>
                        electronic ecommerce<br>
                        in Barcelona
                     </div>
                     
                  </div>

                  <div data-name="stories">

                    <div data-name="story">
                        <div data-name="date">October 02 — 2002</div>
                        <div data-name="headline">Hostal Paris Barcelona Slideshow</div>
                        <div data-name="body">
                           <div>
                              <b>Hostal Paris Barcelona</b>
                              <br>
                              Slidewhow website
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/hostalparisbcn">https://davidberruezo.com/hostalparisbcn</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                  </div>

            </div>

            <div data-path='emexs' data-template="emexs">
               
               <div data-menu="home" data-name="menu">emexs</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        Emexs agency based<br>
                        tourism, web design and <br>
                        reservation systems<br>
                        in Barcelona
                     </div>


                  </div>
                  
                  <div data-name="stories">

                  <div data-name="story">
							<div data-name="date">September 29 — 2017</div>
                     <div data-name="headline">Universal</div>
                     <div data-name="body">
                        <div>
                           <b>Universal Holliday Centre</b>
                           <br> 
                           reservation system
                           <br>
                           codeIgniter Application
                           <br>
                           <a target="_blank" href="https://www.universalholidaycentre.com/">https://www.universalholidaycentre.com/</a>   
                        </div>
                     </div>
                     <div data-name="image-tag-name">Emexs Marketing</div>
                     <div data-name="images">
                          <div data-name="image"><?php echo $url; ?>upload/universal/plantilla_imagen_1.png</div>
                          <div data-name="image"><?php echo $url; ?>upload/universal/plantilla_imagen_2.png</div>
					  </div>
					</div>

					

                  </div>
                  <!-- stories -->


            </div>

       
            <div data-path='ofiprix' data-template="ofiprix">
               
               <div data-menu="home" data-name="menu">ofiprix</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        Ofiprix leader in<br>
                        furniture sales,<br>
                        manufacturing, online<br>
                        and offline sales
                     </div>
                       

                  </div>
                  
                  <div data-name="stories">

                     <div data-name="story">
                        <div data-name="date">October 29 — 2018</div>
                        <div data-name="headline">Ofichairs</div>
                        <div data-name="body">
                           <div>
                              <b>Ofichairs</b>
                              <br> 
                              Online store
                              <br>
                              Prestashop store
                              <br>
                              <a target="_blank" href="https://ofichairs.com/">https://ofichairs.com/</a>   
                           </div>
                        </div>
                        <div data-name="image-tag-name">Ofichairs</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/ofichairs/imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/ofichairs/imagen_2.png</div>
                        </div>
                     </div>   

                  </div>

            </div>

            <div data-path='avantio' data-template="avantio">
               
               <div data-menu="home" data-name="menu">avantio</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>
                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        
                     <div data-name="body">
                        Avantio leader in<br>
                        tourism sector,<br>
                        vrms, channel manager<br>
                        and websites
                     </div>
                       
                  </div>
                  
                  <div data-name="stories">
                     <div data-name="story">
                        <div data-name="date">February 01 — 2021</div>
                        <div data-name="headline">Home Sweet Home Villas</div>
                        <div data-name="body">
                           <div>
                              <b>Home Sweet Home Villas</b>
                              <br> 
                              Online store
                              <br>
                              Reservation System
                              <br>
                              <a target="_blank" href="https://www.homesweethomevillas.com/">https://www.homesweethomevillas.com/</a>   
                           </div>
                        </div>
                        <div data-name="image-tag-name">Home Sweet Home Villas</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/homesweethomevillas/imagen_1.jpg</div>
                           <div data-name="image"><?php echo $url; ?>upload/homesweethomevillas/imagen_2.jpg</div>
                        </div>
                     </div>   
                     
                  </div>
            </div>

            <div data-path='software' data-template="software">
                  
                  <div data-submenu="yes" data-name="menu">Software</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <!--
                     <div data-name="link" data-link="projects">Selected Projects</div>
                     -->
                     
                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        Web programmer<br>
                        Php and JavaScript<br>
                        Experience to the<br>
                        last years
                     </div>
                     
                  </div>

            </div>

            
            

            <div data-path='codeigniter' data-template="codeigniter">
               
               <div data-menu="software" data-name="menu">codeIgniter</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        codeIgniter php framework<br>
                        based in mvc pattern<br>
                        very light and small<br>
                        versions 2 and 3
                     </div>
                     
                  </div>

                  <div data-name="stories">

                     <div data-name="story">
                        <div data-name="date">March 15 — 2003</div>
                        <div data-name="headline">David Berruezo Portfolio Intranet</div>
                        <div data-name="body">
                           <div>
                              <b>MVC Application</b> 
                              <br>
                              codeIgniter application
                              <br>
                              <a target="_blank" href="http://davidberruezo.com/admin">https://davidberruezo.com/admin</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio_intranet/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio_intranet/plantilla_imagen_2.png</div>
                        </div>
                     </div>   

                  </div>

            </div>

            <div data-path='zend' data-template="zend">
               
               <div data-menu="software" data-name="menu">zend</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        Zend Framework<br>
                        php framework based<br>
                        in mvc pattern<br>
                        version 2 and 3
                     </div>
                     
                  </div>

                  <div data-name="stories">

                  <div data-name="story">
                        <div data-name="date">Desember 02 — 2002</div>
                        <div data-name="headline">David Berruezo Portfolio</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo Portfolio</b> 
                              <br>
                              Zend Framework
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/davidberruezo/public_html/">https://davidberruezo.com/davidberruezo/public_html/</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                  </div>
                  
            </div>   


            
      
            <div data-path='wordpress' data-template="wordpress">
               
               <div data-menu="software" data-name="menu">wordpress</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        Wordrpress CMS<br>
                        php cms based in<br>
                        plugins using codex<br> 
                        list functions<br>
                     </div>
                     
                  </div>
                  
                  <div data-name="stories">

                     <div data-name="story">
                        <div data-name="date">January 02 — 2003</div>
                        <div data-name="headline">David Berruezo Blog</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo Blog</b> 
                              <br>
                              Wordpress Blog
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/davidberruezo/public_html/blog">https://davidberruezo.com/davidberruezo/public_html/blog</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend_blog/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_zend_blog/plantilla_imagen_2.png</div>
                        </div>
                     </div>


                  </div>   

            </div>


            <div data-path='prestashop' data-template="prestashop">
               
               <div data-menu="software" data-name="menu">prestashop</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        PrestaShop CMS<br>
                        php cms to build<br>
                        stores ecommerce systems<br>
                        versions 1.6 and 1.7
                     </div>
                     
                  </div>

                  <div data-name="stories">

                     <div data-name="story">
                        <div data-name="date">October 29 — 2018</div>
                        <div data-name="headline">Ofichairs</div>
                        <div data-name="body">
                           <div>
                              <b>Ofichairs</b>
                              <br> 
                              Online store
                              <br>
                              Prestashop store
                              <br>
                              <a target="_blank" href="https://ofichairs.com/">https://ofichairs.com/</a>   
                           </div>
                        </div>
                        <div data-name="image-tag-name">Ofichairs</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/ofichairs/imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/ofichairs/imagen_2.png</div>
                        </div>
                     </div>   
                     
                  </div>


            </div>

            <div data-path='javascript' data-template="javascript">
               
               <div data-menu="software" data-name="menu">js|es6|es5</div>
                  
                  <div data-name="frontpage">
                     
                     <div data-name="founded">
                        David Berruezo
                        <br>
                        Programador
                        <br>
                        Barcelona
                        <br>
                        Spain
                     </div>

                     <div class="link_menu" data-name="links" data-link="https://www.davidberruezo.com/blog">Blog</div>
                     <div class="link_menu" data-name="links" data-link="https://github.com/david-berruezo">GitHub</div>
                     <div class="link_menu" data-name="links" data-link="https://codepen.io/david-berruezo">CodePen</div>	
                        

                     <div data-name="body">
                        JavaScript,ES6,ES5<br>
                        applications using <br>
                        native ecmascript<br>
                        technology
                     </div>
                     
                  </div>

                  <div data-name="stories">

                     <div data-name="story">
                        <div data-name="date">March 02 — 2003</div>
                        <div data-name="headline">David Berruezo Portfolio</div>
                        <div data-name="body">
                           <div>
                              <b>David Berruezo JavaScript</b> 
                              <br>
                              JavaScript Objects
                              <br>
                              <a target="_blank" href="https://davidberruezo.com/">https://davidberruezo.com/</a>
                           </div>
                        </div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/david_berruezo_portfolio/plantilla_imagen_2.png</div>
                        </div>
                     </div>

                     <div data-name="story">
                        <div data-name="date">October 02 — 2002</div>
                        <div data-name="headline">Hostal Paris Barcelona Slideshow<br></div>
                        <div data-name="body"><div><b>Hostal Paris Barcelona</b> Slidewhow website&nbsp;</div></div>
                        <div data-name="image-tag-name">eCommerce Bacelona</div>
                        <div data-name="images">
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_1.png</div>
                           <div data-name="image"><?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_2.png</div>
                        </div>
                     </div>


                  </div>
                  
            </div>

				<div data-path='resume' data-template="profile">
				
					<div data-submenu="yes" data-name="menu">Resume</div>
            
					<div data-name="frontpage">
						
						<div data-name="founded">
							David Berruezo
							<br>
							Programador
							<br>
							Barcelona
							<br>
							Spain
						</div>

						
						<div data-name="story">
							+34 615 23 15 33<br>
							<a href="#" target="_top">davidberruezo@davidberruezo.com</a>
							<br><br><br><br>
							For job or an<br>
							interview please write<br>
							<a href="#" target="_top">davidberruezo@davidberruezo.com</a><br><br>
							
						</div>

						<div data-name="body">
							Resume,studies,<br>
							skills,experiences<br>
							and much more<br>
							download cv
						</div>	
						
						<div data-name="link" data-link="projects"><a target="_blank" href="#">More details click here</a></div>
						
					</div>

					<div data-name="employees">

						<div data-name="employee">
							<div data-name="info">
								<div data-name="name">David Berruezo</div>
								<div data-name="title">Web programmer<br>Php and JavaScript</div>
								<div data-name="mail"><a href="#" target="_top">davidberruezo@davidberruezo.com</a></div>
								<div data-name="phone">+34 615231533</div>
								<div data-name="linkedin">https://www.linkedin.com/in/david-berruezo</div>
							</div>
							
						</div>

						<div data-name="image">assets/images/profile/david.png</div>

					</div>

					<div data-name="service">
						<div data-name="headline">My Skills</div>
						<div data-name="body">I have always worked as a programmer in a web environment. Normally programming in php language with javascript and also css3 and html5.</div>

						<div data-name="circles" data-type="round">
							<div data-name="circle">JavaScript</div>
							<div data-name="circle">PHP</div>
							<div data-name="circle">HTML5</div>
							<div data-name="circle">MySQL</div>
							<div data-name="circle">Photoshop</div>
						</div>

					</div>

					<div data-name="process">
						<div data-name="headline">My Studies</div>
						<div data-name="body">In this section you can see a summary of my academic education made to date.</div>

						<div data-name="circles" data-type="straight">
							<div data-name="circle">FP2</div>
							<div data-name="circle">Grau Multimedia UPC</div>
							<div data-name="circle">Student Computer Engineering</div>
							
						</div>

					</div>

				</div>

            <div data-path='studies' data-template="studies">
				
					<div data-menu="resume" data-name="menu">Studies</div>
            
					<div data-name="frontpage">
						
						<div data-name="founded">
							David Berruezo
							<br>
							Programador
							<br>
							Barcelona
							<br>
							Spain
						</div>

						
						<div data-name="story">
							+34 615 23 15 33<br>
							<a href="#" target="_top">davidberruezo@davidberruezo.com</a>
							<br><br><br><br>
							For job or an<br>
							interview please write<br>
							<a href="#" target="_top">davidberruezo@davidberruezo.com</a><br><br>
							
						</div>

						<div data-name="body">
							Resume,studies,<br>
							skills,experiences<br>
							and much more<br>
							download cv
						</div>	
						
						<div data-name="link" data-link="projects"><a target="_blank" href="#">More details click here</a></div>
						
					</div>

					<div data-name="employees">

						<div data-name="employee">
							<div data-name="info">
								<div data-name="name">David Berruezo</div>
								<div data-name="title">Web programmer<br>Php and JavaScript</div>
								<div data-name="mail"><a href="#" target="_top">davidberruezo@davidberruezo.com</a></div>
								<div data-name="phone">+34 615231533</div>
								<div data-name="linkedin">https://www.linkedin.com/in/mathiashnormark</div>
							</div>
							
						</div>

						<div data-name="image">assets/images/profile/david.png</div>

					</div>

					<div data-name="service">
						<div data-name="headline">My Skills</div>
						<div data-name="body">I have always worked as a programmer in a web environment. Normally programming in php language with javascript and also css3 and html5.</div>

						<div data-name="circles" data-type="round">
							<div data-name="circle">JavaScript</div>
							<div data-name="circle">PHP</div>
							<div data-name="circle">HTML5</div>
							<div data-name="circle">MySQL</div>
							<div data-name="circle">Photoshop</div>
						</div>

					</div>

					<div data-name="process">
						<div data-name="headline">My Studies</div>
						<div data-name="body">In this section you can see a summary of my academic education made to date.</div>

						<div data-name="circles" data-type="straight">
							<div data-name="circle">FP2</div>
							<div data-name="circle">Grau Multimedia UPC</div>
							<div data-name="circle">Student Computer Engineering</div>
							
						</div>

					</div>

				</div>


            <div data-path='https://davidberruezo.com/cv' data-template="cv">
               <div data-menu="resume" data-name="menu">Cv</div>
            </div>   
           
				<div data-path='blog' data-template="principles">
					
					<div data-submenu="yes" data-name="menu">Blog</div>
               
					<div data-name="frontpage">
						
						<div data-name="founded">
							David Berruezo
							<br>
							Programador
							<br>
							Barcelona
							<br>
							Spain
						</div>

						<div data-name="body">
						Read articles, knowledge,<br> 
						practices and much more<br>
						click down or in all sections
						</div>
					
						<div data-name="link" data-link="https://davidberruezo.com/cv"><a target="_blank" href="https://davidberruezo.com/cv">More details click here</a></div>	
						
					</div>

					<div data-name="sections">
						<div data-name="section">
							<div data-name="headline">Examples</div>
							<div data-name="body">In this section you can see examples,source code,download it and comment to it. I update all examples when I have some time. I hope to have the files up to date.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">roundrect</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Tutorials</div>
							<div data-name="body">You can read several tutorials I think are very interesting in my opinion and you can comment to it. I apology you if you find some error and I suggest to you to comment it.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">doubletriangle</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Experience</div>
							<div data-name="body">All information you see, source code, articles, tutorials, information in general I write them from my professional experience and from my studies. For everything you need or want send me an email.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">rectbyrect</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Articles</div>
							<div data-name="body">I hope you like and comment my articles and I suggest you give to me any ideas to write new articles that you think will be interesting.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">triangle</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Comments</div>
							<div data-name="body">I hope you write several comments on my blog because I'm sure you have several important thing to write and to say. Many thanks in advance.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">rect</div>
						</div>

					</div>


				</div>



            <div data-path='blogdetail' data-template="principlesdetail">
					
					<div data-menu='blog' data-name="menu">Details</div>
               
					<div data-name="frontpage">
						
						<div data-name="founded">
							David Berruezo
							<br>
							Programador
							<br>
							Barcelona
							<br>
							Spain
						</div>

						<div data-name="body">
						Read articles, knowledge,<br> 
						practices and much more<br>
						click down or in all sections
						</div>
					
						<div data-name="link" data-link="https://davidberruezo.com/articles"><a target="_blank" href="https://davidberruezo.com/articles">More details click here</a></div>	
						
					</div>

					<div data-name="sections">
						<div data-name="section">
							<div data-name="headline">Examples</div>
							<div data-name="body">In this section you can see examples,source code,download it and comment to it. I update all examples when I have some time. I hope to have the files up to date.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">roundrect</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Tutorials</div>
							<div data-name="body">You can read several tutorials I think are very interesting in my opinion and you can comment to it. I apology you if you find some error and I suggest to you to comment it.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">doubletriangle</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Experience</div>
							<div data-name="body">All information you see, source code, articles, tutorials, information in general I write them from my professional experience and from my studies. For everything you need or want send me an email.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">rectbyrect</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Articles</div>
							<div data-name="body">I hope you like and comment my articles and I suggest you give to me any ideas to write new articles that you think will be interesting.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">triangle</div>
						</div>

						<div data-name="section">
							<div data-name="headline">Comments</div>
							<div data-name="body">I hope you write several comments on my blog because I'm sure you have several important thing to write and to say. Many thanks in advance.<a target="_blank" href="#">Click here</a></div>
							<div data-name="image">rect</div>
						</div>

					</div>


				</div>

            <div data-path='https://davidberruezo.com/articles' data-template="blogwordpress">
               <div data-menu="blog" data-name="menu">Wordpress</div>
            </div>

				<div data-path='projects' data-template="projects-0">
					
					<div data-submenu="yes" data-name="menu">Projects</div>
               
               <div data-path='hostalparisbcnslideshow' data-template="case-0">
                  <!-- <div data-path='royalpasseigdegraciahotel' data-template="case-0"> -->

                    <div data-name="info">
                        <div data-name="headline">
                            Hostal Paris Barcelona 
                        </div>
                        <div data-name="client">
                            eCommerce Barcelona                         
                        </div>
                        <div data-name="project">
                            SlideShow ( Frontend )                        
                        </div>
                        <div data-name="year">
                            2012-September                        
                        </div>
                        <div data-name="website"><a target="_blank" href="http://www.davidberruezo.com/hostalparisbcn">davidberruezo.com/hostalparisbcn</a></div>
                    </div>
                    <div data-name="overviewimage">
                        <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_1.png                    
                    </div>
                    <div data-name="home">
                        <div data-name="headline">
                            Hostal Paris Barcelona                        
                        </div>
                        <div data-name="details">
                            <div><br />
                            Server Languages:&nbsp; nothing<br />
                            Client Languages: Javascript, jQuuery<br />
                            Database:&nbsp; nothing<br />
                            Animations:&nbsp; Tween<br />
                            Credits: <b>Hostal Paris Barcelona</b><br>
                            Website: <a href="https://davidberruezo.com/hostalparisbcn">https://davidberruezo.com/hostalparisbcn</a> 
                           </div>
                        </div>
                        <div data-name="body">
                            <p><b>Hostal Paris Barcelona:&nbsp;</b>slideshow to show hotel,rooms,address and all information</p>
                        </div>
                    </div>
                    <!-- home -->
                  <div data-name="modules">
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_1.png 
                        </div>
                      
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Hostal Paris Barcelona</b>
                                <br> 
                                Show all images
                                <br>
                                Make transitions between images
                                <br>
                                Animations with tween max
                                </p>
                              </div>
                        </div>
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_2.png 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Hostal Paris Barcelona</b>
                                <br> 
                                Responsive using native css
                                <br>
                                Responsive using media queries
                                <br>
                                Menu with media queries
                             </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_3.png 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                              <p>
                                 <b>Hostal Paris Barcelona</b>
                                 <br>
                                 Creation interactive scripts
                                 <br>
                                 Scripts to follow the mouse
                              </p>
                            </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_4.png
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Hostal Paris Bcn</b>
                                    <br>
                                    creation css layouts
                                    <br>
                                    css flexbox layout
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_5.png
                        </div>

                  </div>
                  <!-- modules -->
               </div>
               <!-- case 0 -->

               
					
					<!-- project -->	

				</div>
            <!-- projects -->
            
            <div data-path='projectsecommerce' data-template="projectsecommerce">
            
					<div data-menu="projects" data-name="menu">ecommerce</div>
               
                  <div data-path='hostalparisbcnslideshow' data-template="case-0">
                  <!-- <div data-path='royalpasseigdegraciahotel' data-template="case-0"> -->

                    <div data-name="info">
                        <div data-name="headline">
                            Hostal Paris Barcelona 
                        </div>
                        <div data-name="client">
                            eCommerce Barcelona                         
                        </div>
                        <div data-name="project">
                            SlideShow ( Frontend )                        
                        </div>
                        <div data-name="year">
                            2012-September                        
                        </div>
                        <div data-name="website"><a target="_blank" href="http://www.davidberruezo.com/hostalparisbcn">davidberruezo.com/hostalparisbcn</a></div>
                    </div>
                    <div data-name="overviewimage">
                        <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_1.png                    
                    </div>
                    <div data-name="home">
                        <div data-name="headline">
                            Hostal Paris Barcelona                        
                        </div>
                        <div data-name="details">
                            <div><br />
                            Server Languages:&nbsp; nothing<br />
                            Client Languages: Javascript, jQuuery<br />
                            Database:&nbsp; nothing<br />
                            Animations:&nbsp; Tween<br />
                            Credits: <b>Hostal Paris Barcelona</b><br>
                            Website: <a href="https://davidberruezo.com/hostalparisbcn">https://davidberruezo.com/hostalparisbcn</a> 
                           </div>
                        </div>
                        <div data-name="body">
                            <p><b>Hostal Paris Barcelona:&nbsp;</b>slideshow to show hotel,rooms,address and all information</p>
                        </div>
                    </div>
                    <!-- home -->
                  <div data-name="modules">
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_1.png 
                        </div>
                      
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Hostal Paris Barcelona</b>
                                <br> 
                                Show all images
                                <br>
                                Make transitions between images
                                <br>
                                Animations with tween max
                                </p>
                              </div>
                        </div>
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_2.png 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Hostal Paris Barcelona</b>
                                <br> 
                                Responsive using native css
                                <br>
                                Responsive using media queries
                                <br>
                                Menu with media queries
                             </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_3.png 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                              <p>
                                 <b>Hostal Paris Barcelona</b>
                                 <br>
                                 Creation interactive scripts
                                 <br>
                                 Scripts to follow the mouse
                              </p>
                            </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_4.png
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Hostal Paris Bcn</b>
                                    <br>
                                    creation css layouts
                                    <br>
                                    css flexbox layout
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/hostalparisbcn_slideshow/plantilla_imagen_5.png
                        </div>

                  </div>
                  <!-- modules -->
               </div>
               <!-- case 0 -->

            </div>
            <!-- projects --> 

            <div data-path='projectsemexs' data-template="projectsemexs">
            
					<div data-menu="projects" data-name="menu">emexs</div>
               
                  <div data-path='universal' data-template="case-0">
                    <div data-name="info">
                        <div data-name="headline">
                            Universal 
                        </div>
                        <div data-name="client">
                            Emexs Digital                        
                        </div>
                        <div data-name="project">
                            Website ( Frontend / Backend )                        
                        </div>
                        <div data-name="year">
                            2019-November                        
                        </div>
                        <div data-name="website"><a target="_blank" href="http://www.universalholidaycentre.com">universalholidaycentre.com</a></div>
                    </div>
                    <div data-name="overviewimage">
                        <?php echo $url; ?>upload/universal/plantilla_imagen_1.png                    
                    </div>
                    <div data-name="home">
                        <div data-name="headline">
                            Universal                        
                        </div>
                        <div data-name="details">
                            <div><br />
                            Server Languages:&nbsp; Php codeIgniter, php native<br />
                            Client Languages: Javascript, jQuuery<br />
                            Database:&nbsp; Mysql<br />
                            Animations:&nbsp; Bootstrap libreria<br />
                            Credits: <b>Universal Holliday Center</b>
                            </div>
                        </div>
                        <div data-name="body">
                            <p><b>Universal Holliday Centre:&nbsp;</b>reservation system to rent and sell apartments in Costa Daurada,Tarragona</p>
                        </div>
                    </div>
                    <!-- home -->
                  <div data-name="modules">
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/universal/plantilla_imagen_1.png 
                        </div>
                      
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p style="font-size:14px;line-height:20px;">
                                <b>Universal Holliday Center</b>&nbsp; Booking engine to rent and sell apartments in Tarragona coast. Application get data (all properties) from Avantio 
                                software by xml using cUrl with a cron in a linux server.Application there are a landing pages,dynamic blocks,opinions, apartments by zones, 
                                advantatges,languages and documentation
                                </p>
                            </div>
                        </div>
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/universal/plantilla_imagen_2.png 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p style="font-size:14px;line-height:20px;"><b>FRONTEND: </b></p>
                                <p style="font-size:14px;line-height:20px;">
                                    <b>PHP: </b>Php codeIgniter, php native,
                                    <br /> date object,datetime object,mysql_query
                                </p>
                               <p style="font-size:14px;line-height:20px;"><b>JavaScript:</b>date objects and methods, jQuuery plugins<br /></p>
                               <p style="font-size:14px;line-height:20px;"><b>Bootstrap:</b><br /></p>
                               <p style="font-size:14px;line-height:20px;"><b>Animations: </b>bootstrap animation library<br /></p>
                               <p style="font-size:14px;line-height:20px;"><b>Database: </b>DDL,DML,</p>
                            </div>
                        </div>
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/universal/plantilla_imagen_3.png 
                        </div>
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p style="font-size:14px;line-height:20px;"><b>BACKEND: </b></p>
                                <p style="font-size:14px;line-height:20px;"><b>PHP:</b> Selects,Insert,Deletes,Updates,codeIgniter queries</p>
                                <p style="font-size:14px;line-height:20px;"><b>Mysql: </b>Mapping database by show tables and show full columns,DML AND DDL
                                    <br /> date,DateTime,mysql_query
                                </p>
                            </div>
                        </div>
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/universal/plantilla_imagen_1.jpg
                        </div>

                  </div>
                  <!-- modules -->
               </div>
			   					
					<!-- project -->	

				</div>
            <!-- projects -->

            <div data-path='projectsofiprix' data-template="projectsofiprix">
            
                <div data-menu="projects" data-name="menu">ofiprix</div>
       
                <div data-path='universal' data-template="case-0">
                    
                    <div data-name="info">
                        <div data-name="headline">
                            Universal 
                        </div>
                        <div data-name="client">
                            Emexs Digital                        
                        </div>
                        <div data-name="project">
                            Website ( Frontend / Backend )                        
                        </div>
                        <div data-name="year">
                            2019-November                        
                        </div>
                        <div data-name="website"><a target="_blank" href="http://www.universalholidaycentre.com">universalholidaycentre.com</a></div>
                    </div>
                    
                    <div data-name="overviewimage">
                        <?php echo $url; ?>upload/universal/plantilla_imagen_1.png                    
                    </div>
                    
                    <div data-name="home">
                        <div data-name="headline">
                            Universal                        
                        </div>
                        <div data-name="details">
                            <div><br />
                            Server Languages:&nbsp; Php codeIgniter, php native<br />
                            Client Languages: Javascript, jQuuery<br />
                            Database:&nbsp; Mysql<br />
                            Animations:&nbsp; Bootstrap libreria<br />
                            Credits: <b>Universal Holliday Center</b>
                            </div>
                        </div>
                        <div data-name="body">
                            <p><b>Universal Holliday Centre:&nbsp;</b>reservation system to rent and sell apartments in Costa Daurada,Tarragona</p>
                        </div>
                    </div>
                    <!-- home -->

                    <div data-name="modules">
                            
                            <div data-name="moduleImage" width="1920" height="1080">
                                <?php echo $url; ?>upload/universal/plantilla_imagen_1.png 
                            </div>
                        
                            <div data-name="moduleText">
                                <div data-name="top">
                                    <p style="font-size:14px;line-height:20px;">
                                    <b>Universal Holliday Center</b>&nbsp; Booking engine to rent and sell apartments in Tarragona coast. Application get data (all properties) from Avantio 
                                    software by xml using cUrl with a cron in a linux server.Application there are a landing pages,dynamic blocks,opinions, apartments by zones, 
                                    advantatges,languages and documentation
                                    </p>
                                </div>
                            </div>
                            <div data-name="moduleImage" width="1920" height="1080">
                                <?php echo $url; ?>upload/universal/plantilla_imagen_2.png 
                            </div>
                            
                            <div data-name="moduleText">
                                <div data-name="top">
                                    <p style="font-size:14px;line-height:20px;"><b>FRONTEND: </b></p>
                                    <p style="font-size:14px;line-height:20px;">
                                        <b>PHP: </b>Php codeIgniter, php native,
                                        <br /> date object,datetime object,mysql_query
                                    </p>
                                <p style="font-size:14px;line-height:20px;"><b>JavaScript:</b>date objects and methods, jQuuery plugins<br /></p>
                                <p style="font-size:14px;line-height:20px;"><b>Bootstrap:</b><br /></p>
                                <p style="font-size:14px;line-height:20px;"><b>Animations: </b>bootstrap animation library<br /></p>
                                <p style="font-size:14px;line-height:20px;"><b>Database: </b>DDL,DML,</p>
                                </div>
                            </div>
                            <div data-name="moduleImage" width="1920" height="1080">
                                <?php echo $url; ?>upload/universal/plantilla_imagen_3.png 
                            </div>
                            <div data-name="moduleText">
                                <div data-name="top">
                                    <p style="font-size:14px;line-height:20px;"><b>BACKEND: </b></p>
                                    <p style="font-size:14px;line-height:20px;"><b>PHP:</b> Selects,Insert,Deletes,Updates,codeIgniter queries</p>
                                    <p style="font-size:14px;line-height:20px;"><b>Mysql: </b>Mapping database by show tables and show full columns,DML AND DDL
                                        <br /> date,DateTime,mysql_query
                                    </p>
                                </div>
                            </div>
                            <div data-name="moduleImage" width="1920" height="1080">
                                <?php echo $url; ?>upload/universal/plantilla_imagen_1.jpg
                            </div>

                    </div>
                    <!-- modules -->
            
                </div>
                <!-- project -->	

            </div>
            <!-- projects -->

            <div data-path='projectsavantio' data-template="projectsavantio">
            
				<div data-menu="projects" data-name="menu">avantio</div>
               
                  <div data-path='homesweethomevillas' data-template="case-0">
                    
                    <div data-name="info">
                        <div data-name="headline">
                            Home Sweet Home Villas
                        </div>
                        <div data-name="client">
                            Home Sweet Home Villas (Avantio)                         
                        </div>
                        <div data-name="project">
                            Programming ( Frontend | Backend )                        
                        </div>
                        <div data-name="year">
                            2021-February                        
                        </div>
                        <div data-name="website"><a target="_blank" href="https://www.homesweethomevillas.com/">Home Sweet Home Villas</a></div>
                    </div>
                    <div data-name="overviewimage">
                        <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_1.jpg                    
                    </div>
                    <div data-name="home">
                        <div data-name="headline">
                           Home Sweet Home Villas                        
                        </div>
                        <div data-name="details">
                            <div><br />
                            Server Languages:&nbsp; PhP <br />
                            Client Languages: &nbsp; ECMAScript 6 , Html , Css<br />
                            Database:&nbsp; MySQL <br />
                            Animations:&nbsp; Tween<br />
                            Credits: <b>Home Sweet Home Villas</b><br>
                            Website: <a href="https://www.homesweethomevillas.com/">https://www.homesweethomevillas.com/</a> 
                           </div>
                        </div>
                        <div data-name="body">
                            <p><b>Home Sweet Home Villas:&nbsp;</b>reservation system</p>
                            <p>Integration Avantio VRM System&nbsp;</p>
                            <p>Soap WebServices(Api Websites and Pms Avantio)</p>
                            <p>CodeIgniter + ECMAScript 6 + MySQL</p>
                            <p>Multiple CronJobs</p>
                        </div>
                    </div>
                    <!-- home -->
                  <div data-name="modules">
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_1.jpg 
                        </div>
                      
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Home Sweet Home Villas</b>
                                <br> 
                                Reservation System
                                <br>
                                Connection VRMS Avantio
                                <br>
                                Browsers and Url System 
                                </p>
                              </div>
                        </div>
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_2.jpg 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Home Sweet Home Villas</b>
                                <br> 
                                Dynamic Blocks
                                <br>
                                Dynamic Menus
                                <br>
                                Dynamic Content
                             </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_3.jpg 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                              <p>
                                 <b>Home Sweet Home Villas</b>
                                 <br>
                                 Dynamic Destinations
                                 <br>
                                 Dynamic URL System
                                 <br>
                                 Dynamic Galleries
                              </p>
                            </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_4.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Blog WordPress
                                    <br>
                                    Last news by language
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_5.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Newsletter
                                    <br>
                                    Several forms
                                    <br>
                                    Email mailing
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_6.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Dynamic menus
                                    <br>
                                    Dynamic Galleries
                                    <br>
                                    Friendly urls
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_7.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Google Maps Geolocations
                                    <br>
                                    Several browsers
                                    <br>
                                    Show properties in maps
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_8.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Registrations and validations fields
                                    <br>
                                    Automatically send emails
                                    <br>
                                    Several forms
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_8_bis.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Payment GateWay 
                                    <br>
                                    Comercia Addons Payment La caixa
                                    <br>
                                    Integration payments with VRMS Avantio
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_9.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Details Property 
                                    <br>
                                    Several galleries
                                    <br>
                                    Several amenities and characteristics
                                    <br>
                                    Google maps geolocation
                                    <br>
                                    Similar properties    
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_10.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Details Property 
                                    <br>
                                    Chalendar Description and Restriction                                    
                                    <br>
                                    Several descriptions
                                    <br>
                                    Calculations days and prices
                                    <br>
                                    Similar properties
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_11.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Backend Integration 
                                    <br>
                                    Properties , locations , galleries                                    
                                    <br>
                                    Multi language descriptions
                                    <br>
                                    Multi fields
                                    <br>
                                    Add scripts
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_12.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Backend Integration 
                                    <br>
                                    Multi language descriptions
                                    <br>
                                    Multi editors
                                    <br>
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_13.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Multiple galleries
                                    <br>
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_14.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Add prices
                                    <br>
                                    Add seassons
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_15.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Home Sweet Home Villas</b>
                                    <br>
                                    Inegration third party software
                                    <br>
                                    Integrations MRBS open source
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/homesweethomevillas/plantilla_imagen_16.jpg
                        </div>

                  </div>
                  <!-- modules -->
               </div>
               <!-- case 0 -->

               <div data-path='llafranc-villas' data-template="case-0">
                    
                    <div data-name="info">
                        <div data-name="headline">
                            Llafranc Villas
                        </div>
                        <div data-name="client">
                        Llafranc Villas WordPress (Avantio)                         
                        </div>
                        <div data-name="project">
                            Programming ( Frontend | Backend )                        
                        </div>
                        <div data-name="year">
                            2021-March                        
                        </div>
                        <div data-name="website"><a target="_blank" href="https://llvillas.com/">Llafranc Villas</a></div>
                    </div>
                    <div data-name="overviewimage">
                        <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_1.jpg                    
                    </div>
                    <div data-name="home">
                        <div data-name="headline">
                        Llafranc Villas                        
                        </div>
                        <div data-name="details">
                            <div><br />
                            Server Languages:&nbsp; PhP WordPress<br />
                            Client Languages: &nbsp; ECMAScript 6 , Html , Css<br />
                            Database:&nbsp; MySQL <br />
                            Animations:&nbsp; Tween<br />
                            Credits: <b>Llafranc Villas</b><br>
                            Website: <a href="https://www.llvillas.com/">https://www.llvillas.com/</a> 
                           </div>
                        </div>
                        <div data-name="body">
                            <p><b>Llafranc Villas:&nbsp;</b>reservation system</p>
                            <p>WordPress Application WP-Rentals theme&nbsp;</p>
                            <p>WordPress upate automatically wp-cron by plugins</p>
                            <p>CodeIgniter Integration Avantio VRMS</p>
                            <p>Several cronjobs</p>
                        </div>
                    </div>
                    <!-- home -->
                  <div data-name="modules">
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_1.jpg 
                        </div>
                      
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Llafranc Villas</b>
                                <br> 
                                Reservation System
                                <br>
                                Wp Rentals template
                                <br>
                                Several Browsers 
                                </p>
                              </div>
                        </div>
                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_2.jpg 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                <b>Llafranc Villas</b>
                                <br> 
                                Show featured properties
                                <br>
                                Show discounts
                                <br>
                                Show seassons
                             </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_3.jpg 
                        </div>
                        
                        <div data-name="moduleText">
                            <div data-name="top">
                                <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Google Maps Geolocations
                                    <br>
                                    Property destinations and radius area
                                </p>
                            </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_4.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Galleries
                                    <br>
                                    Multi language descriptions
                                    <br>
                                    Chalendar availability
                                    <br>
                                </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_5.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Multi language descriptions
                                    <br>
                                    Amenities
                                    <br>
                                    Characteristics
                                    <br>
                                    Address
                                 </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_6.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Similar properties
                                    <br>
                                    Google Maps geoloation
                                    
                                </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_7.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Showing properties by location
                                    <br>
                                    Showing properties by filters
                                    <br>
                                    Filters integration Avantio VRMS
                                    <br>
                                </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_8.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Properties custom post type
                                    <br>
                                    Properties taxonomies
                                    <br>
                                    Propeites custom fields
                                    <br>
                                </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_9.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                                <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Multi language PolyLang plugin
                                    <br>
                                    Programming polylang custom pos type
                                    <br>
                                    Programming polylang taxonomies
                                    <br>
                                </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_10.jpg
                        </div>

                        <div data-name="moduleText">
                             <div data-name="top">
                             <p>
                                    <b>Llafranc Villas</b>
                                    <br>
                                    Categories taxonomies
                                    <br>
                                    Action taxonomies
                                    <br>
                                    Location hierarchy taxonomies
                                    <br>
                                    Custom fields
                                </p>
                              </div>
                        </div>

                        <div data-name="moduleImage" width="1920" height="1080">
                            <?php echo $url; ?>upload/llafranc_villas/plantilla_imagen_11.jpg
                        </div>

                  </div>
                  <!-- modules -->
               </div>
               <!-- case 0 -->


            </div>
            <!-- projects -->
            

			</div>
		</div>

      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/Funciones.js"></script>

		<!-- animation -->
		<script defer src="<?php echo $url; ?>js/lib/greensock/TweenMax_min.js"></script>

		<!-- Tools n Utils -->
		<script defer src="<?php echo $url; ?>js/lib/setsnail/system/BrowserDetect_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/debug/Debug_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/animation/AnimationUtils_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/Trace_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/EventDispatcher_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/ColorUtils_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/CSS_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/Snail_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/ArrayUtils_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/RenderEngine_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/StringUtils_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/instafeed.min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/MapUtils_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/share/ShareUtils_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/search/SearchManager_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/text/Text_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/prototype/array/sortOn_min.js"></script>
		<!-- TouchLib -->
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/Touchable_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/TouchDragger_min.js"></script>

		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/utils/DragGroup_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/utils/DragInfo_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/utils/GroupDragger_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/utils/TouchInfo_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/utils/EaseInfo_min.js"></script>

		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/plugins/DraggerPlugin_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/plugins/DraggerEasePlugin_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/plugins/DragBasic_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/plugins/DragBounds_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/touch/plugins/DragEase_min.js"></script>

		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/Rectangle_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/utils/MathUtils_min.js"></script>

		<!-- ResizeManager -->
		<script defer src="<?php echo $url; ?>js/lib/setsnail/resize/ResizeManager_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/resize/ResizeManagerSettings_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/resize/ResizeEvents_min.js"></script>

		<script  src="<?php echo $url; ?>js/lib/setsnail/video/VideoPlayer_min.js"></script>

		<!-- RetinaHandler -->
		<script defer src="<?php echo $url; ?>js/lib/setsnail/image/RetinaImage_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/retina/RetinaHandle_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/retina/RetinaHandleEvents_min.js"></script>

		<!-- ContentManager -->
		<script defer src="<?php echo $url; ?>js/lib/setsnail/contentManager/ContentManager_min.js"></script>
		<script defer src="<?php echo $url; ?>js/lib/setsnail/contentManager/TemplateData_min.js"></script>

		<!--
		END SnailLib
		-->

		<!-- Src -->
		<script src="<?php echo $url; ?>js/src/Main_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/Config_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/Assets_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/UIColors_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/utils/GuideLines_min.js"></script>
		<!--<script src="js/src/setsnail/utils/LinedCircle.js"></script>-->
		<!--<script src="js/src/setsnail/utils/RoundCircleGroup.js"></script>-->
		<!--<script src="js/src/setsnail/utils/GroupedCircles.js"></script>-->
		<script defer src="<?php echo $url; ?>js/src/setsnail/utils/ScrollController_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/utils/ImageSlider_min.js"></script>

		<!--LINES-->
		<script defer src="<?php echo $url; ?>js/src/setsnail/utils/Lines/PsychedelicLines_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/utils/Lines/LineMaskDrawer_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/utils/Lines/LineMaskShape_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/utils/Lines/CirclesOnALines_min.js"></script>

		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/buttons/TextButton_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/text/TextArea_min.js"></script>

		<!-- Templates -->
		<script defer src="<?php echo $url; ?>js/src/setsnail/templates/PageTemplate_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateHome_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateEcommerce_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateEmexs_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateOfiprix_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateAvantio_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplatePhp_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateCodeigniter_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateZend_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateWordpress_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplatePrestashop_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateJavascript_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateCase_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateCasesOverview_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateCasesOverviewEmexs_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateCasesOverviewEcommerce_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateCasesOverviewOfiprix_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateCasesOverviewAvantio_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplatePrincip_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplatePrincipDetail_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateProfil_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/templates/TemplateStudies_min.js"></script>

		<!-- Modules -->
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/Module_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/WhiteSpaceModule_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/ReturnModule_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/BasicHomeModule_min.js"></script>

      <script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/home/HomeStoryModule_min.js"></script>

		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/case/CaseOverviewModule_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/case/CaseHomeModule_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/case/CaseImageModule_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/case/CaseVideoModule_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/case/CaseTextModule_min.js"></script>

      <script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/casesoverview/OverviewCaseModule_min.js"></script>

      <script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/principles/PrincipleSectionModule_min.js"></script>

		<!--<script src="js/src/setsnail/ui/modules/profile/ProfileEmployeeModule_min.js"></script>-->
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/profile/ProfileEmployeeModuleTwo_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/profile/ProfileInfoModule_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/modules/profile/ProfileEmployee_min.js"></script>

      <!-- Components -->
      <script defer src="<?php echo $url; ?>js/src/setsnail/ui/components/Footer_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/ui/components/HomeStory_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/components/CasesInfoBox_min.js"></script>


		<!-- Menu -->
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MainMenu_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuBorder_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuBorderLines_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuLogo_min.js"></script>

		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuContent_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuContentBusiness.js"></script>

		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuContactInfo_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuFooter_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuSelector_min.js"></script>
		<script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuSelectorBusiness_min.js"></script>
      <script defer src="<?php echo $url; ?>js/src/setsnail/ui/menu/MenuSocial_min.js"></script>
      
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-77902370-12', 'auto');
  ga('send', 'pageview');
</script>
<!-- Initialize site -->
<script>
	window.onload = function() {
		document.body.style.margin = 0;
		document.body.style.padding = 0;
		document.body.style.color = "#1c1c1c";
		document.body.style.fontSize = "17px";
		document.body.style.fontStyle = "normal";
		document.body.style.overflowX = "hidden";
		document.body.style.width = "100%";
		document.body.style.height = "100%";
      var main = new Main();
		document.body.appendChild(main);
      main.init();
      //console.log("dominio: "+domain);
      //console.log("pathname: "+pathname);
   };
</script>
</body>
</html>
