(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0bab"],{"68e8":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{attrs:{action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.website,expression:"website"}],attrs:{type:"text",name:"website",placeholder:"website"},domProps:{value:e.website},on:{input:function(t){t.target.composing||(e.website=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",name:"phone",placeholder:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.facebook,expression:"facebook"}],attrs:{type:"text",name:"facebook",placeholder:"facebook"},domProps:{value:e.facebook},on:{input:function(t){t.target.composing||(e.facebook=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.instagram,expression:"instagram"}],attrs:{type:"text",name:"instagram",placeholder:"instagram"},domProps:{value:e.instagram},on:{input:function(t){t.target.composing||(e.instagram=t.target.value)}}}),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{name:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.street,expression:"street"}],attrs:{type:"text",name:"street",placeholder:"street"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{type:"text",name:"city",placeholder:"city"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.categories,expression:"categories"}],attrs:{type:"text",name:"categories",placeholder:"categories"},domProps:{value:e.categories},on:{input:function(t){t.target.composing||(e.categories=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],attrs:{type:"text",name:"image",placeholder:"image"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}}),a("br"),a("input",{attrs:{type:"submit"},on:{click:e.putDataToFirestore}})]),e._v(" aa "+e._s(e.putTogetherLocation)+" bb ")])},n=[],s=(a("a4d3"),a("e01a"),a("b0c0"),a("ac1f"),a("1276"),a("498a"),a("f6fd")),i={install(e,t){e.$geocoder=e.prototype.$geocoder={defaultCountryCode:t.defaultCountryCode||null,defaultLanguage:t.defaultLanguage||null,defaultMode:"lat-lng"==t.defaultMode?"lat-lng":"address",googleMapsApiKey:t.googleMapsApiKey,googleMapsUrl:"https://maps.googleapis.com/maps/api/geocode/json",createRequestObject(e,t=null){var a=new XMLHttpRequest;return a.onreadystatechange=function(){4==a.readyState&&200==a.status&&t&&t(a.response)},a.responseType="json",a.open("GET",e),a},getDefaultUrl(){var e=this.googleMapsUrl;return e+="?key="+encodeURIComponent(this.googleMapsApiKey),this.defaultCountryCode&&(e+="&components=country:"+this.defaultCountryCode),this.defaultLanguage&&(e+="&language="+this.defaultLanguage),e},send(e,t=null){switch(this.defaultMode){case"lat-lng":this.getGoogleResponseFromLatLng(e,t);break;case"address":default:this.getGoogleResponseFromAddress(e,t);break}},getGoogleResponseFromAddress(e,t=null){var a=this.toAddressString(e),o=this.getDefaultUrl();o+="&address="+encodeURIComponent(a);var n=this.createRequestObject(o,t);n.send()},getGoogleResponseFromLatLng(e,t=null){var a=this.getDefaultUrl();a+="&latlng="+encodeURIComponent(e.lat)+","+encodeURIComponent(e.lng);var o=this.createRequestObject(a,t);o.send()},toAddressString(e){var t="";return e&&(t+=e.address_line_1?e.address_line_1+" ":"",t+=e.address_line_2?e.address_line_2+" ":"",t+=e.city?e.city+", ":"",e.province||e.postal_code?(t+=e.province?e.province+", ":"",t+=e.postal_code?e.postal_code+", ":""):(t+=e.state?e.state+", ":"",t+=e.zip_code?e.zip_code+", ":""),t+=e.country?e.country:""),t},setDefaultCountryCode(e){this.defaultCountryCode=e},setDefaultLanguage(e){this.defaultLanguage=e},setDefaultMode(e){this.defaultMode="address"==e?e:"lat-lng"},setGoogleMapsApiKey(e){this.googleMapsApiKey=e},getDefaultCountryCode(){return this.defaultCountryCode},getDefaultLanguage(){return this.defaultLanguage},getDefaultMode(){return this.defaultMode},getGoogleMapsApiKey(){return this.googleMapsApiKey}}}},r=a("2b0e");r["a"].use(i,{defaultCountryCode:"DE",defaultLanguage:"DE",defaultMode:"address",googleMapsApiKey:"AIzaSyDDbgCoG9fZGvw_vs9_8aw3Rz_O_2OdEb0"});var l={name:"TheInput",components:{},data:function(){return{name:"",website:"",email:"",phone:"",facebook:"",instagram:"",description:"",street:"",city:"",categories:"",image:"",location:""}},computed:{putTogetherLocation:function(){return{name:this.name.trim(),website:this.website.trim(),email:this.email.trim(),phone:this.phone.trim(),facebook:this.facebook.trim(),instagram:this.instagram.trim(),description:this.description.trim(),street:this.street.trim(),city:this.city.trim(),categories:this.categories.split(","),image:this.image.trim(),location:this.location}}},methods:{putDataToFirestore:function(e){var t=this;e.preventDefault();var a=this.putTogetherLocation,o={address_line_1:a.street,city:a.city,country:"Germany"};r["a"].$geocoder.send(o,(function(o){a.location=[o.results[0].geometry.location.lat,o.results[0].geometry.location.lng],e.preventDefault(),s["a"].reference("locations/"+(new Date).toUTCString()+"-"+t.putTogetherLocation.email).set(a).then((function(){console.log(a),console.log("Document successfully written!")})),t.name="",t.website="",t.email="",t.phone="",t.facebook="",t.instagram="",t.description="",t.street="",t.city=""}))}}},u=l,d=a("2877"),p=Object(d["a"])(u,o,n,!1,null,"98b0fd1c",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d0bab.1171c9ee.js.map