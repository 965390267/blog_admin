<template>
    <div class="rightaside">   
        <!-- <Note></Note>  -->
         <weatherCard></weatherCard>
                <!-- <headCard></headCard> -->
                 <!-- <Brower></Brower> -->
        <!-- <CalendarBox></CalendarBox> -->
<NewArticle></NewArticle>
    </div>
</template>

<script>
import headCard from './personCard'
import Note from "@/components/note";
import weatherCard from "@/components/weather";
import CalendarBox from "@/components/totalmessage/calendar";
import Brower from "@/components/brower";
import NewArticle from "./mostNewArticle";
export default {
    components:{
        headCard,CalendarBox,Note,
        Brower,weatherCard,NewArticle
    }
}
</script>
