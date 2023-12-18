 let hour = document.getElementById('hour');
        let minute = document.getElementById('minute');
        let second = document.getElementById('second');
        function updateTime() {
            second.style.transform = `rotate(${new Date().getSeconds() * 6.1}deg)`
            minute.style.transform = `rotate(${new Date().getMinutes() * 6.1}deg)`
            hour.style.transform = `rotate(${(new Date().getHours()) * 30.5}deg)`
        }
        updateTime()
        setInterval(updateTime, 1000)