
var myArray = [
    {'title':'The 3 Stages Of Wealth EVERYONE Must Go Through', 'date':'2020/20/04', 'topic':'business', 'author':'Alex Becker', 'platform':'youtube' , 'link':'https://www.youtube.com/watch?v=Upu5VdT56jc', 'comment':'Type of business depending on where one is at.'},
    {'title':'Why Your Mind Is Full Of Weeds', 'date':'2020/20/04', 'topic':'business', 'author':'Sam Ovens', 'platform':'youtube' , 'link':'https://www.youtube.com/watch?v=sslfgLMOyWY', 'comment':'Focus on the most important things.'},

]

$('#search-input').on('keyup', function(){
  var value = $(this).val()
  console.log('Value:',value)
  var data = searchTable(value, myArray)
  buildTable(data)
})

buildTable(myArray)

function searchTable(value, data){
  var filteredData = []

  for (var i = 0; i < data.length; i++){
    value = value.toLowerCase()
    var title = data[i].title.toLowerCase()
    var topic = data[i].topic.toLowerCase()
    var author = data[i].author.toLowerCase()
    var platform = data[i].platform.toLowerCase()

    if (title.includes(value) || topic.includes(value) || author.includes(value) || platform.includes(value)){
      filteredData.push(data[i])
    }
  }

  return filteredData
}

 $('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);

     if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
     }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
     }

    $(this).html(text)
    buildTable(myArray)
    })

function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var coltitle = `title-${i}`
        var coldate = `date-${i}`
        var coltopic = `topic-${i}`
        var colauthor = `author-${i}`
        var colplatform = `platform-${i}`

        var row = `<tr>
                        <td>
                          <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            ${data[i].title}
                          </a>
                        </td>
                        <td>${data[i].date}</td>
                        <td>${data[i].topic}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].platform}</td>
                   </tr>`
        table.innerHTML += row
    }
}
