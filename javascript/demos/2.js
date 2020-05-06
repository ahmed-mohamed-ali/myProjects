  var img = prompt("select image from 1:5");
        var color = prompt("enter color");
        var txt = prompt("enter text");
        document.write("<p style='color:" + color + "'>" + txt + "</p> <br>");
        switch (img) {
            case '1':
                document.write("<img style='border-color:"+color+"'border='2' src=image/01.jpg ><br>");

                break;
            case '2':
                document.write("<img style='border-color:"+color+"'border='2' src=image/02.jpg ><br>");
                break;
            case '3':
                document.write("<img style='border-color:"+color+"'border='2' src=image/03.jpg ><br>");
                break;
            case '4':
                document.write("<img style='border-color:"+color+"'border='2' src=image/04.jpg ><br>");
                break;
            case '5':
                document.write("<img style='border-color:"+color+"'border='2' src=image/05.jpg ><br>");
                break;
            default:
                document.write("<p style='color:" + color + "'>out of range images</p> <br>");
                break;

        }

