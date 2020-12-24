precision mediump float;
varying vec2 fTexCoord;
varying vec4 fColor;

uniform int renderState;
uniform vec4 color;
uniform sampler2D sampler2d;

void main()
{
	
	if(renderState == 0){
		gl_FragColor = fColor * color;
	}
	else if(renderState == 1){
		gl_FragColor = texture2D(sampler2d, fTexCoord);
	}
	
	//gl_FragColor = vec4(fColor.r, fColor.g, fColor.b, fColor.a);
	
}