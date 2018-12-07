# LightningStarRating

Component to allow selection or display of a rating using stars

This component can be used to just display a score in the form of a star rating (by setting readOnly to true), or to allow the users to input a score value.  The scores can be restricted to whole numbers or you can allow values in increments of 0.5 which will be displayed with half of the star colored.

This component uses the JQuery Raty plugin (https://www.jqueryscript.net/other/Full-featured-Star-Rating-Plugin-For-jQuery-Raty.html)

## Usage
<c:CmpStarRating numStars="10" &lt;!-- Optional - default is 5 --&gt;
                 value="{!v.score}" 
	             readOnly="true" &lt;!-- default is false which allows selection --&gt;
                 showHalf="true" &lt;!-- default is false. Decides whether 1/2 stars are displayed --&gt;
                 selectHalf="true" &lt;!-- default is false. Decides whether 1/2 stars are allowed for selection --&gt;
                 cancelPlace="left" &lt;!-- default is right. Location of cancel button to the right or left of the stars --&gt; 
/>


## Additional Info

There is also a static resource called ratingStars included in this package that can be used to create formula fields in Salesforce to display a decimal field as a star rating on a page layout or related list.

The formula would look like this:

MAGE( 
CASE(Account_Score__c, 
0,"/resource/ratingStars/stars_0.png", 
0.5,"/resource/ratingStars/stars_0_5.png", 
1,"/resource/ratingStars/stars_1.png", 
1.5,"/resource/ratingStars/stars_1_5.png", 
2,"/resource/ratingStars/stars_2.png", 
2.5,"/resource/ratingStars/stars_2_5.png", 
3,"/resource/ratingStars/stars_3.png", 
3.5,"/resource/ratingStars/stars_3_5.png", 
4,"/resource/ratingStars/stars_4.png", 
4.5,"/resource/ratingStars/stars_4_5.png", 
5,"/resource/ratingStars/stars_5.png", 
"/resource/ratingStars/stars_0.png"), 
"Account Score" 
)

If you are not using partial scores (.5), leave out those values.


	
## Install Steps:
* Use the button below to deploy the code to your org:

<a href="https://githubsfdeploy.herokuapp.com?owner=veenasundara&repo= LightningStarRating">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>
