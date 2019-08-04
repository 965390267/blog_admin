<template>
    <div class="rightaside">   
        <Note></Note> 
        <weatherCard></weatherCard>
                <headCard></headCard>
        <CalendarBox></CalendarBox>
 
    </div>
</template>

<script>
import headCard from './personCard'
import Note from "@/components/note";
import weatherCard from "@/components/weatherCard";
import CalendarBox from "@/components/totalmessage/calendar";
export default {
    components:{
        headCard,CalendarBox,Note,weatherCard
    }
}
</script>
