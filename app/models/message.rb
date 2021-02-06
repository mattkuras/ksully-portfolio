class Message < ApplicationRecord
    def full_name
        first_name + ' ' + last_name
    end

    def time_or_day
        t = created_at.getlocal
        if t.today?
            h = t.hour
            m = t.min
            if t.hour > 12
                h = h - 12 
                time = h.to_s + ':' + m.to_s + 'pm'
            else 
                time = h.to_s + ':' + m.to_s + 'am'
            end
        else
            time = t.ctime.slice(0..9)
        end
    end


    def datetime
        t = created_at.getlocal
        day = t.ctime.slice(0..9)
        if t.hour > 12
            h = t.hour
            m = t.min
            h = h - 12 
            time = h.to_s + ':' + m.to_s + 'pm'
            time + ' ' + day         

        else 
            time = h.to_s + ':' + m.to_s + 'am'
            time + ' ' + day         
        end
    end


end
