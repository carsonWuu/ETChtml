package com.test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class servlet2 extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public servlet2() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	 public void doGet(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {

	        response.setCharacterEncoding("UTF-8");
	        response.setContentType("text/html;charset=UTF-8");
	        //使用request对象的getSession()获取session，如果session不存在则创建一个
	        HttpSession session = request.getSession();
	        //将数据存储到session中
	        session.setAttribute("data", "孤傲苍狼");
	        //获取session的Id
	        String sessionId = session.getId();
	        System.out.println("sesson2:"+sessionId);
	        //判断session是不是新创建的
	        if (session.isNew()) {
	            response.getWriter().print("session创建成功，session的id是："+sessionId);
	        }else {
	            response.getWriter().print("服务器已经存在该session了，session的id是："+sessionId);
	        }
	    }

	    public void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        doGet(request, response);
	    }

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
