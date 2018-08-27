import requests
import json

class tokyo_public_traffic_challenger:
    """
    get tokyo_public_traffic_challenge's api
    https://developer-tokyochallenge.odpt.org/documents
    """
    def __init__(self, api_key):
        self.api_key = api_key

    def get_tptc_api(self, datatype, params):
        """
        get api of Tokyo Public Transport Open Data Challenge
        Args:
            api_key (str): access token
            params (dict): some querys these are filtering a data
        Return:
            api_result (json)
        """
        api_url = "https://api-tokyochallenge.odpt.org/api/v4/{}".format(datatype)
        # api_key is required
        params.update({"acl:consumerKey": self.api_key})
        # send get requests
        response = requests.get(api_url, params=params)
        # if response status is 200, it's success
        if response.status_code == 200:
            api_result = json.loads(response.text, encoding="utf-8")
            return api_result
        else:
            raise response.status_code
    
    def get_api(self, params):
        """
        this method create filter of odpt:PassengerSurvey
        Args:
            odpt_operator (str): ex. odpt.Operator:Keikyu
            odpt_railway (str): ex. odpt.Railway:Keikyu.Airport
            odpt_station (str): ex. odpt.Station:Keikyu.Airport.AnamoriInari
            owl_sameAs (str): it works like as id
                ex.odpt.PassengerSurvey:Keikyu.AnamoriInari
            (@id (str): ex. urn:ucode:_00001C0000000000000100000320027A)
        Returns:
            passenger_survey_result (json)
        """
        data_type = "odpt:PassengerSurvey"
        parameters = {}
        if odpt_operator:
            parameters.update({"odpt:operator": odpt_operator})
        if odpt_railway:
            parameters.update({"odpt:railway": odpt_railway})
        if odpt_station:
            parameters.update({"odpt:station": odpt_station})
        if owl_sameAs:
            parameters.update({"owl:sameAs": owl_sameAs})
        passenger_survey_result = self.get_tptc_api(data_type, parameters)
        return passenger_survey_result



