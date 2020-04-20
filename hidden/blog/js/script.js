
var myArray = [
    {'date':'1989/10/11', 'topic':'zeb', 'author':'Sofiane Affes', 'platform':'youtube'},
    {'date':'1989/01/10', 'topic':'nom', 'author':'Fawzi Nounchaku', 'platform':'youtube'},
    {'date':'1990/14/10', 'topic':'nouna', 'author':'Sofiane Affes', 'platform':'youtube'},
    {'date':'1993/29/11', 'topic':'zeb', 'author':'Samir Zantou7a', 'platform':'dailymotion'},
    {'date':'1991/12/03', 'topic':'zeb', 'author':'Farid Frite', 'platform':'youtube'},
    {'date':'1991/12/10', 'topic':'nouna', 'author':'7mid 103', 'platform':'website'},
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
    var topic = data[i].topic.toLowerCase()
    var author = data[i].author.toLowerCase()
    var platform = data[i].platform.toLowerCase()

    if (topic.includes(value) || author.includes(value) || platform.includes(value)){
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
        var coldate = `date-${i}`
        var coltopic = `topic-${i}`
        var colauthor = `author-${i}`
        var colplatform = `platform-${i}`

        var row = `<tr>
                        <td>${data[i].date}</td>
                        <td>${data[i].topic}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].platform}</td>
                   </tr>`
        table.innerHTML += row
    }
}
