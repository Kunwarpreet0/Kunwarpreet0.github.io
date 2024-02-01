
        // This function changes the content of the 'content-section' element based on the given item.
        function changeContent(item) {
            document.getElementById('content-section').innerHTML = '<h2>Updated Content</h2><p> Oi its working ' + item + '</p>';
        }
// This function changes the background color and text color of the entire body to random colors.
        function changeColorScheme() {
            document.body.style.backgroundColor = getRandomColor();
            document.body.style.color = getRandomColor();
        }
// This function prompts the user to enter a new item, creates a list item, and appends it to the existing unordered list.
        function addNewItem() {
            const newItem = prompt('Enter a new item:');
            if (newItem) {
                const listItem = document.createElement('li');
                listItem.textContent = newItem;
                document.querySelector('ul').appendChild(listItem);
            }
        }
// This function removes the last list item from the unordered list if there are any items present.
        function removeItem() {
            const items = document.querySelectorAll('li');
            if (items.length > 0) {
                const lastItem = items[items.length - 1];
                lastItem.parentNode.removeChild(lastItem);
            }
        }
// This function generates and returns a random hexadecimal color code.
//Taken help from Chatgpt for this function

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    