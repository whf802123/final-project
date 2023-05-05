<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Home</title>
</head>
<body>
<h1>Welcome, <%= session.getAttribute("uname") %>!</h1>
<h2>Available Books</h2>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Reserve</th>
    </tr>
    <%
        java.sql.Connection conn;
        java.sql.Statement st;
        java.sql.ResultSet rs;
        String query = "SELECT * FROM books WHERE is_available = true";

        Class.forName("com.mysql.jdbc.Driver");
        conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost/demo?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true", "root", "ww0802wwSWA");
        st = conn.createStatement();
        rs = st.executeQuery(query);

        while (rs.next()) {
            int bookId = rs.getInt("id");
            String title = rs.getString("title");
            String author = rs.getString("author");
    %>
    <tr>
        <td><%=bookId%></td>
        <td><%=title%></td>
        <td><%=author%></td>
        <td><a href="reserve-book.jsp?book_id=<%=bookId%>">Reserve</a></td>
    </tr>
    <%
        }
    %>
</table>

<h2>Reserved Books</h2>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
    </tr>
    <%
        query = "SELECT books.id, books.title, books.author FROM books INNER JOIN reservations ON books.id = reservations.book_id WHERE reservations.user_id = ? AND is_available = false";
        java.sql.PreparedStatement pstmt = conn.prepareStatement(query);
        Integer userId = (Integer) session.getAttribute("user_id");
        if (userId == null) {
            response.sendRedirect("index.jsp?b=1");
        } else {
            pstmt.setInt(1, userId);
        }

        rs = pstmt.executeQuery();

        while (rs.next()) {
            int bookId = rs.getInt("id");
            String title = rs.getString("title");
            String author = rs.getString("author");
    %>
    <tr>
        <td><%=bookId%></td>
        <td><%=title%></td>
        <td><%=author%></td>
    </tr>
    <%
        }
        rs.close();
        pstmt.close();
        conn.close();
    %>
</table>
</body>
</html>
