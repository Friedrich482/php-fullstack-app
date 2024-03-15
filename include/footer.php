<php ?>
    <footer class="flex items-center justify-center flex-wrap text-center" id="footer">
        <span>&copy;
            <label id="yearLabel"></label>
        </span>,&nbsp; <a class="transition-all duration-1000 hover:gradient-text hover:shadow-xl hover:shadow-blue-500" href="https://github.com/Friedrich482">@Friedrich482</a>&nbsp;<img src="../assets/icons/rocket.svg" class="size-5 relative" alt="rocket image">
        <b><i class="text-pink-500"> All</i> Rights Reserved</b>
    </footer>
    <script>
        let date = new Date();
        let year = date.getFullYear();
        let yearLabel = document.querySelector('#yearLabel');
        yearLabel.textContent = year;
    </script>