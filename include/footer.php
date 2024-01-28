<?php ?>
<footer class="flex items-center justify-center flex-wrap text-center">
    <span>&copy; <label id="yearLabel"></label></span>,&nbsp; @Friedrich482 <img src="../assets/icons/rocket.gif" class="w-8 h-8 relative bottom-1"><b><i class="text-red-300"> All</i> Rights Reserved</b>
</footer>
<script>
        let date = new Date();
        let year = date.getFullYear();
        let yearLabel = document.getElementById('yearLabel');
        yearLabel.textContent = year;
</script>