var data=[]

//Create a Container 
var Container=document.createElement('div');
Container.setAttribute('class','container');
//Creating the Row
var row1=document.createElement('div');
row1.setAttribute('class','row');
Container.appendChild(row1)
//Creating the col
var col=document.createElement('div');
col.setAttribute('class','col-sm-12');row1.appendChild(col);

//Create the Heading
var Heading=document.createElement('h4');Heading.setAttribute('class','head');
Heading.innerHTML='Gandhi Nagar Football Club';
col.appendChild(Heading);
//Creating the Element
var element=document.createElement('div');
element.setAttribute('class','Box-part');col.appendChild(element);
//Creating the Row2
var row2=document.createElement('div');
row2.setAttribute('class','row');
element.appendChild(row2);
//Spliting the column 
var col2=document.createElement('div');
col2.setAttribute('class','col-6');row2.appendChild(col2)
//Creating the Form
var form=document.createElement('form');
form.setAttribute('class','FORM');col2.appendChild(form);
//Creating the Names 
var label=document.createElement('label');
label.innerHTML='Enter Full Name :';label.setAttribute('class','text');
label.setAttribute('class','Identify');form.appendChild(label);
//Creating the Input
var Input1=document.createElement('input');Input1.style.marginLeft='39px'
Input1.setAttribute('id','value1');form.appendChild(Input1);
//Creating the space
var space=document.createElement('br');
form.appendChild(space);
//Creating the Label 2 
var label2=document.createElement('label');
label2.innerHTML='Enter Jersey Number :';
label2.setAttribute('type','number');
label2.setAttribute('class','Identify');form.appendChild(label2);
//Creating the Input2
var input2=document.createElement('input');input2.setAttribute('id','value2');
input2.setAttribute('class','INPUT');form.appendChild(input2);
//Creating the space
var space=document.createElement('br');
form.appendChild(space);
//Creating the Label 3
var label3=document.createElement('label');
label3.setAttribute('class','Identify');label3.innerHTML='Enter Jersey Size :';
form.appendChild(label3);
//Creating the Input4
var input3=document.createElement('input');input3.style.marginLeft='35px';
input3.setAttribute('id','value3');
input3.setAttribute('class','INPUT');form.appendChild(input3)

//Creating the Row3
var row3=document.createElement('div');
row3.setAttribute('class','col-6');row2.appendChild(row3);

//Creating the table
var table =document.createElement('table');
table.setAttribute('class','table');row3.appendChild(table)
//Creating the thead
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
table.appendChild(thead);
//Creating the tr
var tr=document.createElement('tr');
thead.appendChild(tr);
//Creating the th
var th1=document.createElement('th');
th1.innerHTML='FULL NAME';
var th2=document.createElement('th');
th2.innerHTML='JERSEY NUMBER';
var th3=document.createElement('th');
th3.innerHTML='JERSEY SIZE';
tr.append(th1,th2,th3);

//Creating the New Row4
var row4=document.createElement('div');row4.style.marginTop='10px';
row4.setAttribute('class','row');element.appendChild(row4);
//Creating the col3
var col3=document.createElement('div');
col3.setAttribute('class','col-12');row4.appendChild(col3);
//Creating the Button 
var Button=document.createElement('button');
Button.setAttribute('class','click');
Button.innerHTML='Submit';
Button.addEventListener('click',press);
col3.append(Button)

var row5=document.createElement('div');
row5.setAttribute('class','row');element.appendChild(row5);

var col4=document.createElement('div');
col4.innerHTML='Copyrights Owned by AVN Novelties';
// col4.setAttribute('class','col-12');row5.appendChild(col4);


function press()
{
      data.push({'FirstName':document.getElementById('value1').value,'JerseyNumber':document.getElementById('value2').value
      ,'JerseySize':document.getElementById('value3').value})
      console.log(data)
    for(let i=0;i<data.length;i++)
    {
        if(!document.getElementById('f'+i))
        {
            //Creating the tbody
            var tbody=document.createElement('tbody');
            table.appendChild(tbody);
    
            //Creating the trow1
            var tr1=document.createElement('tr');
            var td1=document.createElement('td');
            td1.setAttribute('id','f'+i);
            //Creating the td2
            var td2=document.createElement('td');
            td2.setAttribute('id','JN'+i);
            var td3=document.createElement('td');
            td3.setAttribute('id','JS'+i)

            tr1.append(td1,td2,td3)
            tbody.appendChild(tr1);

            document.getElementById('f'+i).innerHTML=data[i].FirstName;
            document.getElementById('JN'+i).innerHTML=data[i].JerseyNumber;
            document.getElementById('JS'+i).innerHTML=data[i].JerseySize;
        }
    }
    
     


}








document.body.append(Container)