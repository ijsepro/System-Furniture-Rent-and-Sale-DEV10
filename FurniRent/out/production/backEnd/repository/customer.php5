/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 4/6/2018
 * Time: 10:07 PM
 */
<table>
    <thead>
    <tr>
        <th>Email</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
    </tr>
    </thead>
    <tbody>
    <?php
    $conn = mysqli_connect("localhost","root","tharaka","customer");
    $result = mysqli_query($conn,"Select * From search ");
    while ($row = mysqli_fetch_assoc($result));

    ?>
    <tr>
        <td><?php echo $row['email'];?></td>
        <td><?php echo $row['name'];?></td>
        <td><?php echo $row['address']?>;</td>
        <td><?php echo $row['contact']?></td>
    </tr>


    </tbody>
</table>

