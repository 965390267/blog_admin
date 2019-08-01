<template>
    <div class="rightaside">
        <headCard></headCard>
        <CalendarBox></CalendarBox>
    </div>
</template>

<script>
import headCard from './personCard'
import CalendarBox from "@/components/totalmessage/calendar";
export default {
    components:{
        headCard,CalendarBox
    }
}
</script>
