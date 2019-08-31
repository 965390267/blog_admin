<template>
    <div class="rightaside">   
        <!-- <Note></Note>  -->
         <weatherCard></weatherCard>
                <!-- <headCard></headCard> -->
                 <!-- <Brower></Brower> -->
        <CalendarBox></CalendarBox>

    </div>
</template>

<script>
import headCard from './personCard'
import Note from "@/components/note";
import weatherCard from "@/components/weather";
import CalendarBox from "@/components/totalmessage/calendar";
import Brower from "@/components/brower";
export default {
    components:{
        headCard,CalendarBox,Note,Brower,weatherCard
    }
}
</script>
