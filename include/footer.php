<?php ?>
<footer class="flex flex-wrap text-center">
    <label id="yearLabel"></label> @Friedrich482 🚀<b> &copy;<i style="color: lightgreen;"> All</i> Rights Reserved</b>
</footer>
<script>
        let date = new Date();
        let year = date.getFullYear();
        let yearLabel = document.getElementById('yearLabel');
        yearLabel.textContent = year;
</script>